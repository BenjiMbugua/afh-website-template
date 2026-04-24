'use client'
// Stub for @monaco-editor/react — we have no code-type fields in this CMS.
// This prevents Monaco's CDN loader from crashing during SSR/Turbopack bundling.
import * as React from 'react'

interface EditorProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string | undefined) => void
  height?: string | number
  language?: string
  [key: string]: any
}

const Editor = React.forwardRef<HTMLTextAreaElement, EditorProps>(
  ({ value, defaultValue, onChange, height = 300, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        value={value ?? defaultValue ?? ''}
        onChange={(e) => onChange?.(e.target.value)}
        style={{ width: '100%', height, fontFamily: 'monospace', fontSize: 13 }}
        {...rest}
      />
    )
  },
)
Editor.displayName = 'MonacoEditorStub'

export default Editor

export const loader = {
  config: (_config: any) => {},
  init: () => Promise.resolve({} as any),
}

export const useMonaco = () => null
export const DiffEditor = Editor
