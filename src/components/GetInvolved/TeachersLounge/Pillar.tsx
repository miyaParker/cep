const Pillar = ({pillar}: { pillar: { number: number, value: string } }) => {
    return (
        <div className='relative'>
            <p className='pillar font-luckiest text-center text-[142.02px] text-white  stroke-2 stroke-zinc-900 fill-transparent'>{pillar.number}</p>
            <p className='font-bold font-neue absolute text-lg lg:text-xl top-1/3 left-[30%] z-10'>{pillar.value}</p>
        </div>
    )
}
export default Pillar;
