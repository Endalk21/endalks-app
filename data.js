const departments = {
    "cs": {
        name: "Computer Science",
        intro: "Is the study of computers and computational systems, encompassing both theoretical studies and practical applications in software and hardware development.",
        background: "Strong analytical and problem-solving skills are crucial. Proficiency in mathematics, algorithms, and programming languages is essential. An understanding of software engineering principles and data structures is also important.",
        workplaces: "Computer scientists can work in software development companies, research institutions, and various industries requiring computational expertise. Roles include software developers, data scientists, and research analysts.",
        salary: " Salary: 15,000-20,000 ETB.",
        cutting_points: "2023: 3.5, 2024: 3.62015: for male 3.37 and for female 1.81, 2016: for male 3.15 and for female 1.72,2017:for male 3.75 female 3.5",
        capacity: "2015:  50 students, 2016: 210 students"
    },
    "ece": {
        name: "Electrical and Computer Engineering",
        intro: "ECE combines electrical engineering and computer science to develop computer hardware and software.",
        background: "Physics, Math, Circuits.",
        workplaces: "Power grid, Telecom, Hardware Design.",
        salary: "$$$ High",
        cutting_points: "2023: 3.0, 2024: 3.2",
        capacity: "120 Students"
    },
    "bme": {
        name: "Biomedical Engineering",
        intro: "BME applies engineering principles to medicine and biology.",
        background: "Biology, Chemistry, Mechanics.",
        workplaces: "Hospitals, Medical Device Companies.",
        salary: "$$ Medium-High",
        cutting_points: "2023: 2.8, 2024: 2.9",
        capacity: "60 Students"
    },
    "is": {
        name: "Information System",
        intro: "The Information Systems (IS) Department is essential for harnessing technology to optimize business operations. It focuses on developing, implementing, and maintaining systems that manage data effectively. Key functions include software development, data management, IT support, and network administration. By aligning technology with business goals, the IS Department enhances productivity, ensures data security, and drives innovation, making it a critical component for any organization looking to thrive in the digital age.",
        background: "Prospective students should have a foundational understanding of computer science, business operations, and data management. Skills in programming, database management, and an understanding of organizational behavior are beneficial..",
        workplaces: "IS professionals can find opportunities in various sectors, including finance, healthcare, government, and private enterprises. Roles may include system analysts, IT managers, and database administrators. ;",
        salary: "Salary: 10,000-15,000 ETB.",
        cutting_points: "2015: for male 2.94 and for female 1.86,     2016:  for male 2.8 and for female 1.8,   2016:for male 3.4 for female 3.1 ",
        capacity: "2015:  70 students, 2016: 140 students"
    },
    "it": {
        name: "Information Technology",
        intro: "Technology involves the use of computers and telecommunications to store, retrieve, transmit, and manipulate data, often in the context of a business or other enterprise.",
        background: ": Information Technology involves the use of computers and telecommunications to store, retrieve, transmit, and manipulate data, often in the context of a business or other enterprise..",
        workplaces: ":  IT professionals are employed across various industries, including telecommunications, banking, and education. Positions such as network engineers, system administrators, and IT support specialists are common. Salaries can vary; for example, network engineers in Ethiopia have competitive compensation, though specific figures may vary.",
        salary: "Salary: 12,000-16,000 ETB",
        cutting_points: ": 2015: for male 3.01 and for female 1.77, 2016: for male 2.9 and for female 1.73,2017:for male 3.2 for female 2.7",
        capacity: "2015: 100 students, 2016: 120 students"
    },
    "cs_daye": {
        name: "Computer Science (Daye Campus)",
        intro: "Computer Science program offered at the remote Daye Campus.",
        background: "Strong math, logic.",
        workplaces: "Software companies, Regional offices.",
        salary: "$$$ High",
        cutting_points: "2023: 3.0, 2024: 3.1",
        capacity: "50 Students"
    },
    "eme": {
        name: "Electromechanical Engineering",
        intro: "Combines electrical and mechanical engineering disciplines.",
        background: "Mechanics, Circuitry, Physics.",
        workplaces: "Manufacturing, Robotics, Automation.",
        salary: "$$ Medium-High",
        cutting_points: "2023: 2.9, 2024: 3.0",
        capacity: "70 Students"
    },
    "civil": {
        name: "Civil Engineering",
        intro: "Civil Engineering deals with the design and construction of the physical and built environment.",
        background: "Physics, Math, Structural Analysis.",
        workplaces: "Construction firms, Government, Urban Planning.",
        salary: "$$ Medium-High",
        cutting_points: "2023: 3.2, 2024: 3.3",
        capacity: "200 Students"
    },
    "chem": {
        name: "Chemical Engineering",
        intro: "Chemical Engineering involves the production and use of chemicals and energy.",
        background: "Chemistry, Thermodynamics, Math.",
        workplaces: "Process Plants, Food Industry, Pharmaceutics.",
        salary: "$$ Medium",
        cutting_points: "2023: 2.8, 2024: 2.9",
        capacity: "80 Students"
    },
    "mech": {
        name: "Mechanical Engineering",
        intro: "Mechanical Engineering involves the design, production, and operation of machinery.",
        background: "Physics, Mechanics, Thermodynamics.",
        workplaces: "Automotive, Aerospace, Manufacturing.",
        salary: "$$ Medium-High",
        cutting_points: "2023: 3.1, 2024: 3.2",
        capacity: "150 Students"
    },
    "cotm": {
        name: "CoTM",
        intro: "Construction Technology and Management focuses on the management of construction projects.",
        background: "Management, Economics, Construction.",
        workplaces: "Construction Management, Real Estate.",
        salary: "$$ Medium",
        cutting_points: "2023: 2.5, 2024: 2.6",
        capacity: "60 Students"
    },
    "upd": {
        name: "Urban Planning",
        intro: "Urban Planning is a technical and political process concerned with land use and design of the urban environment.",
        background: "Design, Geography, Sociology.",
        workplaces: "Municipalities, Planning Firms.",
        salary: "$ Medium",
        cutting_points: "2023: 2.4, 2024: 2.5",
        capacity: "40 Students"
    }
};
