import Image from 'next/image'
const ChangeComponent = ({component}: { component: { icon: string, value: string } }) => {
    return (
        <div className='flex gap-2 items-center mt-6 lg:mt-0'>
            <div className='bg-gray-100 rounded-full flex items-center justify-center w-[40px] h-[40px] lg:w-[48px] lg:h-[48px]'>
                <Image src={component.icon} className="h-6 w-6" width={24} height={24} alt={component.value}/>
            </div>
            <p className='flex-1 break-words whitespace-normal font-medium font-matter text-lg lg:text-xl w-full'>{component.value}</p>
        </div>

    )
}
export default ChangeComponent;
