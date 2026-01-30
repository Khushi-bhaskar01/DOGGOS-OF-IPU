
function EventCardSkeleton() {
    return (
        <div className="flex flex-col gap-4 rounded-2xl p-6 w-xs bg-linear-to-b from-[#A7D0F8]/60 to-[#507CA8]/60 animate-pulse">

            <div className="flex justify-center">
                <div className="size-24 rounded-full bg-white/40" />
            </div>

            <div className="h-5 w-3/4 bg-white/40 rounded" />
            <div className="h-4 w-full bg-white/30 rounded" />
            <div className="h-4 w-5/6 bg-white/30 rounded" />
            <div className="h-4 w-2/3 bg-white/30 rounded" />

            <div className="h-px w-full bg-white/30 my-2" />

            <div className="h-10 w-full rounded-3xl bg-slate-800/40" />
        </div>
    );
}

export default EventCardSkeleton