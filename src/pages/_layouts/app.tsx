import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        {/* flex flex-1 -> ocupará a largura inteira da tela, menos o espaço do cabeçalho */}
        <Outlet />
      </div>
    </div>
  )
}
