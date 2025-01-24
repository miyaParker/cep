const Pillar = ({pillar}: { pillar: { number: number, value: string } }) => {
    return (
        <div className='relative w-full'>
            <p className='pillar font-luckiest text-center text-[142.02px] text-white  stroke-2 stroke-zinc-900 fill-transparent'>{pillar.number}</p>

            <div className='w-full absolute top-1/3 left-0 z-10 flex items-center justify-center'>
                <p className='font-bold font-neue  text-sm md:text-lg lg:text-xl '>{pillar.value}</p>
            </div>
        </div>
    )
}
export default Pillar;
