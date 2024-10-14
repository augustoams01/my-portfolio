export const SectionHeader = ({title, eyebrow, description}: {title:string, eyebrow:string, description:string}) =>{
    return(
        <>
            <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-sky-400 to-emerald-300 text-transparent bg-clip-text text-center">{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">{title}</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto font-extralight">{description}</p>
        </>
    )
}