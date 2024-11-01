// Mock database for storing students
let students = [];

// GET /students - Retrieve a list of all students
exports.getAllStudents = (req, res) => {
    res.json(students);
};

// GET /students/:id - Retrieve details of a student by ID
exports.getStudentById = (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
};

// POST /students - Add a new student
exports.createStudent = (req, res) => {
    const { id, name, grade, email } = req.body;
    const student = { id, name, grade, email };
    students.push(student);
    res.status(201).json(student);
};

// PUT /students/:id - Update an existing student by ID
exports.updateStudent = (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');

    const { name, grade, email } = req.body;
    student.name = name || student.name;
    student.grade = grade || student.grade;
    student.email = email || student.email;
    res.json(student);
};

// DELETE /students/:id - Delete a student by ID
exports.deleteStudent = (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1) return res.status(404).send('Student not found');

    const deletedStudent = students.splice(studentIndex, 1);
    res.json(deletedStudent[0]);
};
