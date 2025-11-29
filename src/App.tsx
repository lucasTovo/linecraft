import './App.css'
import { TestNavbar } from '@/components/ui/TestNavbar'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <TestNavbar />
      <div className="flex-1 bg-gray-50">
        <h1 className="p-8 text-2xl">LineCraft is running 🎉</h1>
      </div>
    </div>
  )
}

export default App
