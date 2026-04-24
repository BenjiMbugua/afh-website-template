# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
COPY .npmrc ./
RUN npm ci

# Stage 2: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Inject client-specific siteContent.ts from base64 env var
ARG SITE_CONTENT_B64=""
RUN if [ -n "$SITE_CONTENT_B64" ]; then \
      echo "$SITE_CONTENT_B64" | base64 -d > src/lib/siteContent.ts; \
      echo "Injected custom siteContent.ts"; \
    fi

ARG NEXT_PUBLIC_SERVER_URL=http://localhost:3000
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV DATABASE_URI=postgresql://placeholder:placeholder@placeholder:5432/placeholder
ENV PAYLOAD_SECRET=build-time-placeholder

RUN npm run build

# Stage 3: Production runner
FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.npmrc ./.npmrc
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/src/payload.config.ts ./src/payload.config.ts

# Install production deps only
RUN npm ci --omit=dev

RUN mkdir -p ./public/media && chown -R nextjs:nodejs ./public/media

USER nextjs
EXPOSE 3000
ENV NODE_ENV=production

CMD ["node_modules/.bin/next", "start"]
