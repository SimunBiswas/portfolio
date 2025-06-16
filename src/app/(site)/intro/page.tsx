import House from "@/app/components/House"

const page = () => {
  return (
    <div className="bg-black h-screen items-center">
      <House />

      <div className="grid grid-cols-2 gap-4 bg-amber-500">
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
      </div>
    </div>
  )
}

export default page
