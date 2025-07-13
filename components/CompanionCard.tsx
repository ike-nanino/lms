import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id?: string;
    name?: string;
    topic?: string;
    subject?: string;
    duration?: number;
    color?: string;
}

function CompanionCard({ id, name, topic, subject, duration, color }: CompanionCardProps) {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
        <div className="flex justify-between items-center">
            <div className='subject-badge'>{subject}</div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
            </button>
        </div>

        <h2 className="font-bold text-2xl">{name}</h2>
        <p className="text-sm">{topic}</p>

        <div className="flex items-center gap-2">
            <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
            <p className="text-sm"> {duration} minutes </p>
        </div>

        <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
            Launch Lesson
        </button>
        
        </Link>

    </article>
  )
}

export default CompanionCard