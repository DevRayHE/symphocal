const db = require('./connection');
const { User, Student, Class } = require('../models');

db.once('open', async () => {
  await Student.deleteMany();

  const students = await Student.insertMany([
    {
      firstName: 'Quinton',
      lastName: 'He',
      dateOfBirth: '2016-05-21'
    },
    {
      firstName: 'Aria',
      lastName: 'He',
      dateOfBirth: '2019-09-20'
    },
    {
      firstName: 'Sande',
      lastName: 'Singh',
      dateOfBirth: '2016-03-01'
    }
  ]);

  console.log('students seeded');

  await Class.deleteMany();

  const classes = await Class.insertMany([
    {
      name: 'Jitterbugs1',
      description: '45',
      date: 'Saturday',
      startTime: '0945',
      duration: '45',
      capacity: '8',
      cost: '1400',
      room: '2',
      student: [
        students[1]._id
      ]
    },
    {
      name: 'Beeboppers1',
      description: '45',
      date: 'Saturday',
      startTime: '1015',
      duration: '45',
      capacity: '8',
      cost: '1900',
      room: '1',
      student: [
      ]
    },
    {
      name: 'Pianorama Junior1',
      description: '45',
      date: 'Saturday',
      startTime: '1040',
      duration: '45',
      capacity: '8',
      cost: '2700',
      room: '2',
      student: [
        students[0]._id,
        students[2]._id
      ]
    },
  ]);

  console.log('classes seeded');

  await User.create({
    firstName: 'Ray',
    lastName: 'He',
    mobile: '0404044123',
    postCode: '2118',
    email: 'rayhefamily@gmail.com',
    password: 'securePass321',
    children: [
      students[0]._id,
      students[1]._id
    ]
  });

  await User.create({
    firstName: 'Sandeep',
    lastName: 'Singh',
    mobile: '0404987654',
    postCode: '2112',
    email: 'singhfamily@gmail.com',
    password: 'securePass321',
    children: [
      students[2]._id
    ]
  });

  console.log('users seeded');

  process.exit();
})