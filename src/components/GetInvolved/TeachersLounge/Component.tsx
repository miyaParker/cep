import Image from 'next/image'
const Component = ({component}: { component: { icon: string, value: string } }) => {
    return (
        <div className='flex flex-col gap-2 items-center justify-center'>
            <div className="bg-gray-100 rounded-full flex items-center justify-center w-[48px] h-[48px]">
                <Image src={component.icon} className="" width={24} height={24} alt={component.value} />
            </div>
            <p className='font-bold font-neue text-lg lg:text-xl'>{component.value}</p>
        </div>
    )
}
export default Component;
