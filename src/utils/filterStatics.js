export const departments = [
    {
        title: "Engineering",
        value: 'Frontend'
    },
    {
        title: 'Engineering',
        value: 'Backend'
    },
    {
        title: 'Engineering',
        value: 'Fullstack'
    },
    {
        title: 'Engineering',
        value: 'Android'
    },
    {
        title: 'Engineering',
        value: 'iOS'
    },
    {
        title: 'Engineering',
        value: 'React Native'
    }
    ,
    {
        title: 'Engineering',
        value: 'Test/QA'
    }
    , {
        title: 'Engineering',
        value: 'Data Science'
    }
    , {
        title: 'Engineering',
        value: 'Machine Learning'
    },
    {
        title: 'Engineering',
        value: 'Dev-Ops'
    },
    {
        title: 'Product Manager',
        value: 'Product Manager'
    },
    {
        title: 'HR',
        value: 'HR'
    }
];


export const experienceOptions = Array.from({ length: 11 }, (_, i) => ({
    title: `${i} years`,
    value: i, // Year value
}));

export const remoteOptions = [
    { title: "On-Site", value: "onsite" },
    { title: "Remote", value: "remote" },
];

export const salaryOptions = Array.from({ length: 21 }, (_, i) => ({
    title: `₹ ${(i) * 10} Lakhs`,
    value: (i++) * 10, // Salary value in Lakhs
}));