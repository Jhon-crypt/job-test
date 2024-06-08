import JobListing from "../card/joblistingCard";

export default function JobListingsSection() {

    const jobListings = [
        {
            role: 'Full Stack Developer',
            pay: '$400k-$600k',
            location: 'New York, USA',
            skills: ['TS', 'Go', 'Rails', 'JS', 'Python'],
            applicants: 400,
            views: 500
        },
        {
            role: 'UI/UX Designer',
            pay: '$300k-$500k',
            location: 'Remote',
            skills: ['Figma', 'XD', 'AI', 'PS'],
            applicants: 300,
            views: 600
        },
        {
            role: 'Back End Developer',
            pay: '$300k-$400k',
            location: 'San Francisco, USA',
            skills: ['Rails', 'JS'],
            applicants: 400,
            views: 700
        },
        {
            role: 'Front End Developer',
            pay: '$300k-$400k',
            location: 'New York, USA',
            skills: ['TS', 'Go', 'Python'],
            applicants: 200,
            views: 800
        }
    ];


    return (

        <>

            <div className="container mt-5">
                {jobListings.map((job, index) => (
                    <JobListing key={index} {...job} />
                ))}
            </div>

        </>

    )
}