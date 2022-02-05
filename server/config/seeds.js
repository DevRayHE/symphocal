const db = require('./connection');
const { User, Student, Class } = require('../models');

db.once('open', async () => {
  await Student.deleteMany();

  const students = await Student.insertMany([
    {
      firstName: 'Quinton',
      lastName: 'He',
      dateOfBirth: '21-05-2016'
    },
    {
      firstName: 'Aria',
      lastName: 'He',
      dateOfBirth: '20-09-2019'
    },
    {
      firstName: 'Sande',
      lastName: 'Singh',
      dateOfBirth: '01-03-2016'
    }
  ]);

  console.log('students seeded');

  await Class.deleteMany();

  const classes = await Class.insertMany([
    {
      name: 'Jitterbugs1',
      description: 'Our Jitterbugs music program provides children with the opportunity to be immersed in a fun-filled and engaging musical world.The program is one year in length which incorporates singing original and known favourites, action, percussion, dancing, musical craft relating to lesson topic and experiencing early musical concepts for the 2 Year old.',
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
      description: 'The one year Beebopper program is specifically developed for 3 year old children, to develop all aspects of early music fundamentals for this most receptive age group through singing, listening, playing and moving. The focus of this program highlights the importance of early music education whereby learning music as a language from this very young age, can assist in the development of a musical ear.',
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
      description: 'Our Pianorama Junior Music Course is a two-year all rounded musicianship course, which uses the piano as the practical instrument to assist in the development of budding musicians. The course comprises all the elements required to develop musical and technical skills for the young beginner. The curriculum is specifically written based on a simple yet powerful philosophy: “What we hear we sing, what we sing we play, what we play we read and what we read we write” all of which encompasses a wide range of musical activity, enabling concentration to be kept at the optimum during the 45 mins lesson. A focus on developing a musical ear accelerates the process of achievement. Our classrooms are equipped with a digital piano for each student in the classroom, as well as a full range of percussion instruments. Magnetic music boards for all students simplify theoretical work and all piano pieces are learnt with the additional support of speed variable backing tracks. Our teachers are highly qualified both musically and in teaching young students.',
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