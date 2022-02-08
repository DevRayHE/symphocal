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
      firstName: 'Benjamin',
      lastName: 'He',
      dateOfBirth: '20-09-2015'
    },
    {
      firstName: 'Sande',
      lastName: 'Singh',
      dateOfBirth: '01-03-2018'
    }
  ]);

  console.log('students seeded');

  await Class.deleteMany();

  const classes = await Class.insertMany([
    {
      name: 'Jitterbugs',
      date: 'Saturday',
      startTime: '9:45 AM',
      duration: '45',
      capacity: '8',
      cost: '1400',
      room: '2',
      student: [
        students[0]._id,
        students[1]._id,
        students[2]._id,
        students[3]._id
      ],
      description: 'Our Jitterbugs music program provides children with the opportunity to be immersed in a fun-filled and engaging musical world.',
      fullDescription: `The program is one year in length which incorporates singing original and known favourites, action, percussion, dancing, musical craft relating to lesson topic and experiencing early musical concepts for the 2 Year old
      - We introduce children to early music fundamentals such as:
      Aural
      - developing listening skills
      Fine motor skills
      - musical craft
      Gross motor skills
      - action to music or songs
      Pitch
      - singing songs
      Rhythm
      - using percussion
      Structure
      - movement to music
      Learning outcomes
      Singing to develop pitch and memory.
      Dancing to develop response and engaged gross motoskills
      Learning social skills by taking turns, sining dancing together in a group
      Parental involvement develops bonding in a fun and creative environment
      Themed lessons to enhance learning and entice the imagination
      `
    },
    {
      name: 'Jitterbugs',
      date: 'Wednesday',
      startTime: '3:45 PM',
      duration: '45',
      capacity: '8',
      cost: '1400',
      room: '2',
      student: [
      ],
      description: 'Our Jitterbugs music program provides children with the opportunity to be immersed in a fun-filled and engaging musical world.',
      fullDescription: `The program is one year in length which incorporates singing original and known favourites, action, percussion, dancing, musical craft relating to lesson topic and experiencing early musical concepts for the 2 Year old
      - We introduce children to early music fundamentals such as:
      Aural
      - developing listening skills
      Fine motor skills
      - musical craft
      Gross motor skills
      - action to music or songs
      Pitch
      - singing songs
      Rhythm
      - using percussion
      Structure
      - movement to music
      Learning outcomes
      Singing to develop pitch and memory.
      Dancing to develop response and engaged gross motoskills
      Learning social skills by taking turns, sining dancing together in a group
      Parental involvement develops bonding in a fun and creative environment
      Themed lessons to enhance learning and entice the imagination
      `
    },
    {
      name: 'Jitterbugs',
      date: 'Tuesday',
      startTime: '4:15 PM',
      duration: '45',
      capacity: '8',
      cost: '1400',
      room: '2',
      student: [
      ],
      description: 'Our Jitterbugs music program provides children with the opportunity to be immersed in a fun-filled and engaging musical world.',
      fullDescription: `The program is one year in length which incorporates singing original and known favourites, action, percussion, dancing, musical craft relating to lesson topic and experiencing early musical concepts for the 2 Year old
      - We introduce children to early music fundamentals such as:
      Aural
      - developing listening skills
      Fine motor skills
      - musical craft
      Gross motor skills
      - action to music or songs
      Pitch
      - singing songs
      Rhythm
      - using percussion
      Structure
      - movement to music
      Learning outcomes
      Singing to develop pitch and memory.
      Dancing to develop response and engaged gross motoskills
      Learning social skills by taking turns, sining dancing together in a group
      Parental involvement develops bonding in a fun and creative environment
      Themed lessons to enhance learning and entice the imagination
      `
    },
    {
      name: 'Beeboppers',
      date: 'Saturday',
      startTime: '10:15 AM',
      duration: '45',
      capacity: '8',
      cost: '1900',
      room: '1',
      student: [
      ],
      description: 'The one year Beebopper program is specifically developed for 3 year old children, to develop all aspects of early music fundamentals for this most receptive age group through singing, listening, playing and moving.',
      fullDescription: `The focus of this program highlights the importance of early music education whereby learning music as a language from this very young age, can assist in the development of a musical ear. Each lesson involves:
      - Action and movement for gross and fine motor co-ordination
      - Singing to encourage pitch
      - Lots of musical games
      - Learning to work in a group
      - Music appreciation for listening
      - Percussion to develop rhythmic skills
      - Reading and writing basic musical symbols
      The small group environment creates an ideal atmosphere for developing social skills and new friendships. LOADS OF FUN! Classes are 45 minutes long with a carer or parent. As the course progresses, children are introduced to basic rhythm and pitch notation in preparation for our Pianorama Junior Programme at age 4. Enrol your little Beebopper today!
      `
    },
    {
      name: 'Beeboppers',
      date: 'Tuesday',
      startTime: '3:45 PM',
      duration: '45',
      capacity: '8',
      cost: '1900',
      room: '1',
      student: [
      ],
      description: 'The one year Beebopper program is specifically developed for 3 year old children, to develop all aspects of early music fundamentals for this most receptive age group through singing, listening, playing and moving.',
      fullDescription: `The focus of this program highlights the importance of early music education whereby learning music as a language from this very young age, can assist in the development of a musical ear. Each lesson involves:
      - Action and movement for gross and fine motor co-ordination
      - Singing to encourage pitch
      - Lots of musical games
      - Learning to work in a group
      - Music appreciation for listening
      - Percussion to develop rhythmic skills
      - Reading and writing basic musical symbols
      The small group environment creates an ideal atmosphere for developing social skills and new friendships. LOADS OF FUN! Classes are 45 minutes long with a carer or parent. As the course progresses, children are introduced to basic rhythm and pitch notation in preparation for our Pianorama Junior Programme at age 4. Enrol your little Beebopper today!
      `
    },
    {
      name: 'Pianorama Junior',
      date: 'Saturday',
      startTime: '10:40 AM',
      duration: '45',
      capacity: '8',
      cost: '2700',
      room: '2',
      student: [
        students[0]._id,
        students[2]._id
      ],
      description: 'Our Pianorama Junior Music Course is a two-year all rounded musicianship course, which uses the piano as the practical instrument to assist in the development of budding musicians.',
      fullDescription: `The course comprises all the elements required to develop musical and technical skills for the young beginner. The curriculum is specifically written based on a simple yet powerful philosophy: “What we hear we sing, what we sing we play, what we play we read and what we read we write” all of which encompasses a wide range of musical activity, enabling concentration to be kept at the optimum during the 45 mins lesson. A focus on developing a musical ear accelerates the process of achievement. Our classrooms are equipped with a digital piano for each student in the classroom, as well as a full range of percussion instruments. Magnetic music boards for all students simplify theoretical work and all piano pieces are learnt with the additional support of speed variable backing tracks. Our teachers are highly qualified both musically and in teaching young students. In each 45 minute weekly lesson, the students experience the following:

      - Piano tuition: technical development, with solo and ensemble experience
      - Aural (Ear): to train the musical ear for faster comprehension
      - Singing: pitch and vocal expression through original, contemporary songs
      - Percussion: practical experience of learnt rhythmic patterning
      - Theory: intellectual confirmation of music notation and theoretical elements
      - Music Appreciation: to develop listening skills and through actions understand musical structure
      -Musical Games: Fun activities involving learnt skills`
    },
    {
      name: 'Pianorama Junior',
      date: 'Monday',
      startTime: '4:15 PM',
      duration: '45',
      capacity: '8',
      cost: '2700',
      room: '2',
      student: [
        students[0]._id,
        students[2]._id
      ],
      description: 'Our Pianorama Junior Music Course is a two-year all rounded musicianship course, which uses the piano as the practical instrument to assist in the development of budding musicians.',
      fullDescription: `The course comprises all the elements required to develop musical and technical skills for the young beginner. The curriculum is specifically written based on a simple yet powerful philosophy: “What we hear we sing, what we sing we play, what we play we read and what we read we write” all of which encompasses a wide range of musical activity, enabling concentration to be kept at the optimum during the 45 mins lesson. A focus on developing a musical ear accelerates the process of achievement. Our classrooms are equipped with a digital piano for each student in the classroom, as well as a full range of percussion instruments. Magnetic music boards for all students simplify theoretical work and all piano pieces are learnt with the additional support of speed variable backing tracks. Our teachers are highly qualified both musically and in teaching young students. In each 45 minute weekly lesson, the students experience the following:

      - Piano tuition: technical development, with solo and ensemble experience
      - Aural (Ear): to train the musical ear for faster comprehension
      - Singing: pitch and vocal expression through original, contemporary songs
      - Percussion: practical experience of learnt rhythmic patterning
      - Theory: intellectual confirmation of music notation and theoretical elements
      - Music Appreciation: to develop listening skills and through actions understand musical structure
      -Musical Games: Fun activities involving learnt skills`
    },
    {
      name: 'Pianorama Primary',
      date: 'Saturday',
      startTime: '2:15 PM',
      duration: '45',
      capacity: '8',
      cost: '2700',
      room: '2',
      student: [
      ],
      description: 'This course is aimed for students with no previous experience in piano tuition. The focus primarily is to teach the piano as the practical instrument, whilst simultaneously developing strong aural and theoretical skills.',
      fullDescription: `Teaching in a group environment for this age is particularly beneficial from the learning perspective, as the students enjoy learning together and aspire to reach standards set by one another. With regular home practice, the students fly through this curriculum and can feel progress from the early stages, which in turn encourages them to continue through to more advanced levels. The Pianorama Program is an effective and structured programme taught by a highly qualified music educator combined with a fun and unpressured atmosphere. Enrol your child today!`
    },
    {
      name: 'Pianorama Primary',
      date: 'Wednesday',
      startTime: '4:30 PM',
      duration: '45',
      capacity: '8',
      cost: '2700',
      room: '1',
      student: [
      ],
      description: 'This course is aimed for students with no previous experience in piano tuition. The focus primarily is to teach the piano as the practical instrument, whilst simultaneously developing strong aural and theoretical skills.',
      fullDescription: `Teaching in a group environment for this age is particularly beneficial from the learning perspective, as the students enjoy learning together and aspire to reach standards set by one another. With regular home practice, the students fly through this curriculum and can feel progress from the early stages, which in turn encourages them to continue through to more advanced levels. The Pianorama Program is an effective and structured programme taught by a highly qualified music educator combined with a fun and unpressured atmosphere. Enrol your child today!`
    },
    {
      name: 'Pianorama Primary',
      date: 'Thursday',
      startTime: '3:30 PM',
      duration: '45',
      capacity: '8',
      cost: '2700',
      room: '1',
      student: [
      ],
      description: 'This course is aimed for students with no previous experience in piano tuition. The focus primarily is to teach the piano as the practical instrument, whilst simultaneously developing strong aural and theoretical skills.',
      fullDescription: `Teaching in a group environment for this age is particularly beneficial from the learning perspective, as the students enjoy learning together and aspire to reach standards set by one another. With regular home practice, the students fly through this curriculum and can feel progress from the early stages, which in turn encourages them to continue through to more advanced levels. The Pianorama Program is an effective and structured programme taught by a highly qualified music educator combined with a fun and unpressured atmosphere. Enrol your child today!`
    },
    {
      name: 'Pianorama Extension',
      date: 'Saturday',
      startTime: '11:45 AM',
      duration: '45',
      capacity: '8',
      cost: '2800',
      room: '1',
      student: [
      ],
      description: 'Extension Course is for Primary and Intermediate Course graduates. All musical styles of repertoire with an expanded technical development program are covered at this level.',
      fullDescription: `This, together with the acquired musical awareness, enables the teacher to work with the students in a broader field including composition, improvisation, keyboard harmony and extended theoretical components. In our Australian schools, many students will present for the AMEB theory exams, having completed the set syllabus for this level in the Extension curriculum. The Pianorama Program is an effective and structured programme taught by a highly qualified music educator combined with a fun and unpressured atmosphere. Enrol your child today!`
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