import './App.css'
import dayjs from 'dayjs';

function App() {
  // Obtener la fecha actual
  const currentDate = new Date();

  // Array para almacenar los números de los días del mes (del 1 al 30)
  const daysOfMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <main className="grid place-content-center my-auto h-full">
      <div className="grid grid-cols-7 gap-4">
        {daysOfMonth.map(day => (
          <div key={day} className="flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full">
            {day}
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
