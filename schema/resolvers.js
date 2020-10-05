const resolvers = {
  Query: {
    helloWorld() {
      return 'hell bryan bethea'
    },
    async getStudent(root, { id }, { models }) {
      return models.Student.findByPk(id)
    },
    async getAllStudents(root, args, { models }) {
      return models.Student.findAll()
    },
    async getHobbies(root, { id }, { models }) {
      return await models.Hobbies.findByPk(id)
    },
  },
  Mutation: {
    async createStudent(root, args, context, info) {
      console.log('MONKEY', context.models.config)
      return context.models.Student.create({
        firstName: args.firstName,
        email: args.email,
      })
    },
    async createHobbies(root, { studentId, title }, { models }) {
      return models.Hobbies.create({ studentId, title })
    },
  },
  Student: {
    async hobbies(hobbies) {
      return hobbies.getHobbies()
    },
  },
  Hobbies: {
    async student(student) {
      return student.getStudent()
    },
  },
}

module.exports = resolvers
