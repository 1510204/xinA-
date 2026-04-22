// ═══════════════════════════════════════════════════════════════
//  DATA – ĐÃ CẤU TRÚC LẠI ĐỂ HỖ TRỢ PHÂN TRANG (PAGINATION)
// ═══════════════════════════════════════════════════════════════

const DATA = {

  // ── READING PART 1 ──────────────────────────────────────────
  // Gom nhóm thành từng "Trang" (mỗi object là 1 trang chứa nhiều câu)
  reading_p1: [
    { // Trang 1
      items: [
        { before: "In the", after: ", I cycle to work.", options: ["sun", "morning", "market"], answer: "morning" },
        { before: "My", after: " cycle to work with me.", options: ["friends", "house", "car"], answer: "friends" },
        { before: "Therefore, I", after: " my car at my house.", options: ["stay", "burn", "leave"], answer: "leave" },
        { before: "I feel", after: " after cycling to work.", options: ["big", "good", "beautiful"], answer: "good" },
        { before: "Then, I drink water and eat healthy", after: ".", options: ["sugar", "beer", "food"], answer: "food" }
      ]
    },
    { // Trang 2
      items: [
        { before: "When you are at the train", after: ", go to the main gate.", options: ["school", "station", "river"], answer: "station" },
        { before: "The bus", after: " are near.", options: ["stops", "towns", "places"], answer: "stops" },
        { before: "My house is on Parkon Street. It's", after: ", so you can not miss it.", options: ["tired", "color", "green"], answer: "green" },
        { before: "After you come, we will have", after: ".", options: ["dinner", "food", "eat"], answer: "dinner" },
        { before: "In the evening, we can watch some", after: " together.", options: ["animals", "films", "bread"], answer: "films" }
      ]
    },
    { // Trang 3 (Dạng word bank, dùng 5 từ trên tiêu đề làm option chung)
      items: [
        { before: "We are", after: " in a small house in the village.", options: ["staying", "garden", "children", "visit", "old"], answer: "staying" },
        { before: "There are a lot of trees in the", after: ".", options: ["staying", "garden", "children", "visit", "old"], answer: "garden" },
        { before: "We go fishing with our", after: ".", options: ["staying", "garden", "children", "visit", "old"], answer: "children" },
        { before: "Today, we are going to", after: " the town by bus.", options: ["staying", "garden", "children", "visit", "old"], answer: "visit" },
        { before: "There are some", after: " buildings there.", options: ["staying", "garden", "children", "visit", "old"], answer: "old" }
      ]
    },
    { // Trang 4
      items: [
        { before: "I", after: " the area where I live now.", options: ["love", "run", "should"], answer: "love" },
        { before: "My house has a kitchen but it is very", after: ".", options: ["small", "tall", "short"], answer: "small" },
        { before: "I work at a", after: " and I sell clothes.", options: ["car", "shop", "window"], answer: "shop" },
        { before: "Everyday I talk to many", after: ".", options: ["animals", "trees", "people"], answer: "people" },
        { before: "I am on my holiday and I'm excited that I can", after: " you soon.", options: ["show", "visit", "play"], answer: "visit" }
      ]
    },
    { // Trang 5
      items: [
        { before: "The new office is located", after: " a great coffee shop, which is quite convenient.", options: ["near", "small", "big"], answer: "near" },
        { before: "It's always", after: " to work with a team that collaborates so well.", options: ["hot", "friendly", "angry"], answer: "friendly" },
        { before: "I need to", after: " my presentation skills before the big meeting next week.", options: ["ignore", "pass", "practise"], answer: "practise" },
        { before: "Please take some time to", after: " through the proposal again and provide your feedback.", options: ["hear", "read", "watch"], answer: "read" },
        { before: "I really appreciate your help,", after: " let me know if you have any questions.", options: ["so", "to", "very"], answer: "so" }
      ]
    },
    { // Trang 6
      items: [
        { before: "My", after: " is far from work.", options: ["home", "cat", "car"], answer: "home" },
        { before: "I have to", after: " to work.", options: ["swim", "drive", "dance"], answer: "drive" },
        { before: "I sometimes meet my", after: " for lunch.", options: ["furniture", "animals", "friends"], answer: "friends" },
        { before: "We walk in the", after: " sometimes.", options: ["park", "tree", "library"], answer: "park" },
        { before: "The trees are", after: " so we like looking at them.", options: ["ugly", "pretty", "noisy"], answer: "pretty" }
      ]
    }
  ],



  // ── READING PART 2 ──────────────────────────────────────────────────────────────────────────────────────────────────────
    reading_p2: [
    { // Trang 1
      topic: "Weekend activities",
      sentences: [
        "It started early on Saturday morning with a ten-mile race for adults.",
        "Sixty men and women ran in this, and Ms Kamur won with a very fast time.",
        "After receiving the prize, the children's activities and competitions began.",
        "These activities included football, jumping, and swimming, and they had lots of fun.",
        "They were all very hungry after all these, so they enjoyed tasty food and drinks with their parents."
      ]
    },
    { // Trang 2
      topic: "Film",
      sentences: [
        "The films in that period were different from the films of today.",
        "This is because they were black and white, and there was no sound.",
        "In addition to these technical limitations, film producers also had a very low budget.",
        "This lack of money mostly affected actors, and they didn't earn much.",
        "Things have changed over time, and some of them have earned millions of dollars after appearing in films."
      ]
    },
    { // Trang 3
      topic: "Transportation",
      sentences: [
        "In the past, transportation was only available to the rich.",
        "The invention of cars and trains had changed everything and made travelling cheaper.",
        "After these two means of transport, travelling becomes even easier with aero planes.",
        "Because flying with them is so fast, more people now go abroad for holiday and business.",
        "It is more convenient to travel to other part of the world due to the improvement in transports."
      ]
    },
    { // Trang 4
      topic: "New Café in Town",
      sentences: [
        "Last week I went to a new opening cafe on Corner Street.",
        "It was full of people, and the staff were working hard on their first day.",
        "Despite the crowd, they found me a nice table and brought me a menu.",
        "When I first looked at the menu, I was disappointed since I hoped to see a variety of dishes.",
        "I had to choose one of those, so I decided to choose the most expensive sandwich.",
        "It was really good with cheese topping, and I would definitely go back to this place."
      ]
    },
    { // Trang 5
      topic: "Writing about a place",
      sentences: [
        "Before starting writing, you need to do research and find out more details about the country.",
        "It must include data like its people, language, and its culture.",
        "It may not have enough those information, but still you can find similar ones.",
        "You can compare these three areas with your own country.",
        "This comparison can help you find similar understanding between the two nations."
      ]
    },
    { // Trang 6
      topic: "A famous singer",
      sentences: [
        "Michael Jakman is a famous stage singer and performer.",
        "Before becoming famous at a young age, he studied art and music at high school.",
        "During this education, he started to perform on stage.",
        "During his performances on stage, he likes to wear colorful clothes and paint his face.",
        "This strange ways of dressing and his songs attracted people's attention.",
        "They started to follow him on social media and he is now very famous."
      ]
    },
    { // Trang 7
      topic: "Thuyết trình (presentation)",
      sentences: [
        "First, we prepare materials for our group presentation.",
        "Then, we present our topic for five minutes.",
        "During the presentation, we use pictures and our own words to explain the ideas.",
        "After the presentation, the other students ask questions.",
        "Finally, group members take turns answering the questions."
      ]
    },
    { // Trang 8
      topic: "Workplace Evolution",
      sentences: [
        "In the past, employees followed strict nine-to-five schedules.",
        "Limited technology once restricted remote work possibilities.",
        "Modern workplaces are adopting more flexible work models.",
        "Managers now use software to track project progress remotely.",
        "Today, companies experiment with shorter workweeks to boost productivity."
      ]
    },
    { // Trang 9
      topic: "Music festivals",
      sentences: [
        "Last Saturday, a live music show was held in town park.",
        "The local authority planned, sponsored, and paid for everything.",
        "Because it was free, more than 5,000 people attended.",
        "Many of them arrived early and visited nearby shops while they were waiting for it to begin.",
        "The staff there had a busy day, but they were able to close early and watch the famous singer perform.",
        "He performed for two hours and everyone had great fun."
      ]
    },
    { // Trang 10
      topic: "End of term project",
      sentences: [
        "This semester we have studied several chapters about local history in the class.",
        "For end of term project, you need to choose at least 2 of these.",
        "It needs to include relevant images and your own text about the topic.",
        "Then you need to use images and written work to create a presentation.",
        "Your presentation offer your key points and you have around 5 minutes to talk.",
        "After this time, other students are able to ask questions and you need to answer them."
      ]
    },
    { // Trang 11
      topic: "The first American woman in space",
      sentences: [
        "Her father was a skilled worker and her mother was a teacher.",
        "With the support from parents, Mae went to university to study Science.",
        "Her degree allows her to get a seat on the training course in the USA.",
        "This is about space and it helps her to become a member of a research team.",
        "As a part of this group, she traveled in space and did a lot of experiments there.",
        "Some of those were about growing plants and some animals in a spaceship."
      ]
    },
    { // Trang 12
      topic: "Artificial Intelligence",
      sentences: [
        "Over the past decade, artificial intelligence has revolutionized various industries.",
        "The early AI systems were limited to simple pattern recognition tasks.",
        "High computational costs previously hindered the development of AI.",
        "Nowadays, AI engineers build advanced models for complex tasks such as language translation.",
        "Modern AI tools help businesses to analyze data and make better decisions."
      ]
    },

    { // Trang 13
      topic: "University/College Welcome Day",
      sentences: [
        "All students will attend the welcoming day on Monday, the 19th.",
        "The day will begin at 10 a.m in the morning with a short presentation.",
        "At the end of this talk, you will meet the heads of departments and teachers.",
        "These staff members will give you a guided tour in the buildings and our sport facilities in small groups.",
        "During this visit, you will need to stay with these students until lunch break.",
        "This meal will be provided on the second floor of the engineering building"
      ]
    },
    { // Trang 13
      topic: "Tech Innovation Expo",
      sentences: [
        "The tech expo was held on Sunday morning, showcasing cutting-edge innovations.",
        "Over 75 participants attended, with Ms. Tran presenting a smart home device.",
        "After the presentations, awards were given for the most creative prototype.",
        "Activities included 3D printing demos, AI workshops, and virtual reality trials.",
        "Attendees enjoyed networking over coffee and exploring interactive displays."
      ]
    },
    { // Trang 14
      topic: "Internet of Things (IoT)",
      sentences: [
        "The Internet of Things connects everyday devices to enhance functionality.",
        "Early IoT devices were limited by slow internet speeds and compatibility issues.",
        "High development costs restricted IoT adoption in the past.",
        "Engineers now design smart devices for homes and industries.",
        "Modern IoT systems enable real-time data monitoring and automation."
      ]
    },
    { // Trang 15
      topic: "Technology Startup Showcase",
      sentences: [
        "The startup showcase was held on Saturday, highlighting innovative apps.",
        "Over 55 entrepreneurs participated, with Ms. Vo pitching a health-tech app.",
        "After the pitches, awards were given for the most impactful innovation.",
        "Activities included live app demos, coding sprints, and investor Q&A sessions.",
        "Attendees networked over smoothies, brainstorming future partnerships."
      ]
    },
    { // Trang 16
      topic: "Books",
      sentences: [
        "Classic novels often differ significantly from modern bestsellers.",
        "In the past, books were printed with simpler covers and fewer illustrations.",
        "Limited publishing budgets meant authors had to focus on strong story-telling.",
        "Because of financial constraints, many early writers struggled to make a living.",
        "Today, successful authors can earn substantial incomes through book sales and adaptations."
      ]
    },
    { // Trang 17
      topic: "Company Wellness Day",
      sentences: [
        "The wellness day was held on Friday, promoting work-life balance.",
        "Over 50 employees participated, with Mr. Khan leading a stress-relief workshop.",
        "After the workshops, awards were given for the best wellness idea.",
        "Activities included team yoga, time management talks, and a group walk.",
        "Employees enjoyed healthy snacks and shared tips for managing stress."
      ]
    },
    { // Trang 18
      topic: "Community Events",
      sentences: [
        "The event took place on Sunday afternoon, featuring a 5km charity walk.",
        "Over 80 participants joined, with Mr. Thompson finishing first.",
        "After the walk, the organizers awarded prizes to the top three participants.",
        "The event also included fun activities like face painting, relay races, and storytelling for kids.",
        "After the activities, families gathered for a picnic with homemade sandwiches and juice."
      ]
    }
  ],




  // ── READING PART 3 ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  reading_p3: [
    { // Trang 1
      topic: "The Music Festival",
      speakers: [
        { label: "A", color: "speaker-A", text: "This is my first time going to a concert, and the experience was quite mixed. During the first two days. The music was rather ordinary, and the event would have been far more enjoyable if there had been just a little sunshine to brighten things up. Luckily, the last day completely changed my impression, as I finally got to see my favorite singers. Meeting them and enjoying the performances made the whole trip memorable and truly special." },
        { label: "B", color: "speaker-B", text: "I attend music festivals every year, and over time it has become something of a personal tradition. I really enjoy the energetic atmosphere where people come together to share music and excitement. This particular festival, however, felt quite different from what I am used to. The weather conditions were less than perfect, though it didn't bother me that much, as I have enjoyed festivals in the rain before. The venue was moderately convenient and the performances themselves were rather unremarkable. To be honest, I doubt I will choose to come back in the future." },
        { label: "C", color: "speaker-C", text: "I don't like one particular type of music being played at festivals, as I much prefer a variety of genres to enjoy and dance to. Luckily, this event truly lived up to what I was hoping for. The songs and melodies were absolutely impressive, leaving a strong impression on me. Although there was some rain, I actually felt it made the atmosphere even more vibrant and fun. One drawback, however, was the ticket price was quite high, which many students, including me, found difficult to afford." },
        { label: "D", color: "speaker-D", text: "My band and I were invited to play at this festival, and we delivered the kind of performance our audience has come to expect from us. The show turned out to be truly memorable, not only because of the energy on stage but also because some of our ex-band members were present. It felt great to reconnect with them and share stories after the performance. The atmosphere overall was very positive, and the crowd seemed to enjoy every moment. The only real challenge was that the venue was located quite far from the main road, which made moving our instruments and equipment rather inconvenient." }
      ],
      questions: [
        { q: "Who is disappointed with the weather?", answer: "A" },
        { q: "Who enjoyed the final day of the music event?", answer: "A" },
        { q: "Who was not impressed by the event overall?", answer: "B" },
        { q: "Who enjoyed all the music at the music event?", answer: "C" },
        { q: "Who thought the event was expensive?", answer: "C" },
        { q: "Who likes meeting old friends?", answer: "D" },
        { q: "Who thought the location was not good?", answer: "D" },
      ]
    },

       { // Trang 2
      topic: "Extreme sport",
      speakers: [
        { label: "A", color: "speaker-A", text: "Before trying any extreme sport, I believe it’s absolutely essential to train properly. These kinds of activities are exciting,but they can also be dangerous if you don’t know what you’re doing. I’ve seen people get hurt because they didn’t prepare well. That’s why I always make sure to take a training course and understand the safety rules before I try anything new. With the right preparation, I think extreme sports can be a great experience." },
        { label: "B", color: "speaker-B", text: "I’ve always been more into traditional sports like swimming, running, or playing tennis. They’re fun and easy to do regularly. But a few months ago, I went bungee jumping during a holiday, and it was an incredible experience. I didn’t expect to enjoy it so much! I still prefer regular sports for everyday fitness, but now I’m definitely more open to trying extreme sports once in a while for the adventure." },
        { label: "C", color: "speaker-C", text: " What I love most about extreme sports is how they let me enjoy nature in a different way. Activities like rock climbing or mountain biking allow me to explore amazing places while challenging myself physically and mentally. It’s a way to disconnect from daily life and feel completely alive. If I had more time and money, I’d love to do these kinds of sports more often — especially in wild, remote areas." },
        { label: "D", color: "speaker-D", text: " I know some people find extreme sports exciting, but for me, they’ve never been important. I actually avoid them as much as possible. I don’t like the idea of putting myself in danger just for fun. There are plenty of safer ways to stay active and enjoy life. I’d rather go for a walk or do yoga than jump out of a plane or climb a mountain. It’s just not my thing." }
      ],
      questions: [
        { q: "Find training before participating important?", answer: "A" },
        { q: "Like traditional sports like swimming?", answer: "B" },
        { q: "Still like extreme sports after playing once?", answer: "B" },
        { q: "Enjoy nature", answer: "C" },
        { q: "Want to play more extreme sports?", answer: "C" },
        { q: "Find extreme sports unimportant?", answer: "D" },
        { q: "Always avoid playing extreme sports?", answer: "D" },
      ]
    },

    { // Trang 3
      topic: "Childhood",
      speakers: [
        { label: "A", color: "speaker-A", text: "As a child, I spent countless hours playing board games with my friends. The rules were simple, easy and straightforward to grasp, which made the games enjoyable and accessible. As I grew older, I came to believe that board games could be a wonderful way for families to bond. However, modern games have become far more complex, with numerous rules and a wide range of characters to choose from. Although I truly enjoyed playing with my two boys and we often laughed together, I found that learning how to play required quite a bit of effort." },
        { label: "B", color: "speaker-B", text: "I preferred playing outdoors with my friends (peers) when I was small. Fortunately, the weather where we lived was usually pleasant, so we often spent hours running around and chasing each other on the field. At times, we would lie down on the grass and make funny faces, enjoying the carefree moments of childhood. Those memories remain incredibly precious to me and shaped my desire to be surrounded by people. Even now, I find it difficult to stay at home alone for long." },
        { label: "C", color: "speaker-C", text: "I wasn't able to move much as a child and even now. Instead, I was captivated by books (books are my companions) and often preferred reading in my free time. There was a library I frequently visited, where I could lose myself in different stories for hours. Nowadays, I don't read as much as I used to, but I also don't go out very often because I spend time on my computer. I especially enjoy interactive games, as they allow me to socialise and connect with people online." },
        { label: "D", color: "speaker-D", text: "I love playing outdoors. On gloomy days, which happened quite often, I would stare sadly out of the window, wishing I could be outside. There wasn't much to do indoors back then-until one day my mother surprised me with a box full of art supplies. Inside were vibrant palettes, paintbrushes of different sizes, and stacks of clean paper. That was the moment I discovered another passion: painting. I could spend hours simply gazing at a blank canvas, imagining what picture I might bring to life next." }
      ],
      questions: [
        { q: "Who enjoyed playing games with their children?", answer: "A" },
        { q: "Who thought traditional games were much simpler?", answer: "A" },
        { q: "Who enjoyed playing with their friends as a child?", answer: "B" },
        { q: "Who preferred reading books as a child?", answer: "C" },
        { q: "Who enjoyed playing modern games?", answer: "C" },
        { q: "Who enjoyed doing arts as a child?", answer: "D" },
        { q: " Who wished they could spend more time outdoors?", answer: "D" },
      ]
    },

    { // Trang 4
      topic: "Work-Life Balance",
      speakers: [
        { label: "A", color: "speaker-A", text: "As a child, I loved playing board games with my parents after their long workdays. Now, I play with my own kids, and my four-day workweek gives us more time. Flexible schedules help, but I plan carefully to balance work and family. These moments create lasting memories." },
        { label: "B", color: "speaker-B", text: "When I was young, I set up pretend offices with my friends, using toy phones and notebooks. I enjoyed being the 'boss' and planning tasks. Those games taught me organization and leadership, and I still smile thinking about our serious 'meetings'"},
        { label: "C", color: "speaker-C", text: "As a kid, I read books about different jobs, dreaming of my future career. They sparked my ambition. Now, I use productivity apps to manage my tasks in a four-day workweek. The apps streamline my work, but the excitement of planning feels familiar." },
        { label: "D", color: "speaker-D", text: "Growing up, I spent evenings playing tag in the neighborhood with friends.Rainy days kept me indoors, feeling bored. Now, I practice mindfulness to unwind after work.It helps me stay focused and refreshed, especially with a shorter workweek." }
      ],
      questions: [
        { q: "Enjoys family time with board games? ", answer: "A" },
        { q: "Finds modern schedules more flexible?", answer: "A" },
        { q: "Loved organizing pretend offices as a child?", answer: "B" },
        { q: "Loved reading about careers as a child ", answer: "C" },
        { q: "Now enjoys productivity apps", answer: "C" },
        { q: "Loved outdoor play as a child?", answer: "D" },
        { q: "Now prefers mindfulness practices?", answer: "D" },
      ]
    },

    { // Trang 5
      topic: "Technology in Childhood ",
      speakers: [
        { label: "A", color: "speaker-A", text: "Growing up, I watched TV shows about gadgets and inventions with my siblings. Rainy days kept us indoors, and we were always excited for new episodes. These shows sparked my interest in technology. Now, I prefer taking online courses to learn about topics like AI and blockchain. They’re flexible and keep me updated in a fast-changing world. " },
        { label: "B", color: "speaker-B", text: "When I was a child, I spent hours building and controlling toy robots with my friends. I loved making them move and watching how they worked. These toys helped develop my passion for technology, and I still enjoy exploring new devices and inventions today. " },
        { label: "C", color: "speaker-C", text: "As a kid, I couldn’t get enough of science magazines - especially ones about robots and computers. They inspired me to think creatively and learn how things work. That early interest stayed with me, and now I develop mobile apps to make everyday life easier. I still find the process just as exciting." },
        { label: "D", color: "speaker-D", text: "I grew up playing simple computer games my dad programmed. Now, I enjoy teaching my children how to code using fun and easy platforms like Scratch. These modern tools make it much easier to learn. Coding together helps us bond while developing logical thinking and creativity. " }
      ],
      questions: [
        { q: "Who loved watching technology shows as a child", answer: "A" },
        { q: "Who now prefers online learning", answer: "A" },
        { q: "Who loved playing with toy robots as a child?", answer: "B" },
        { q: "Who loved science magazines in the past?", answer: "C" },
        { q: "Who now enjoys app development?", answer: "C" },
        { q: "Who enjoys coding with family?", answer: "D" },
        { q: "Who finds modern tools more accessible?", answer: "D" },
      ]
    },

     { // Trang 6
      topic: "Volunteering",
      speakers: [
        { label: "A", color: "speaker-A", text: "Some people enjoy volunteering abroad, but honestly, I feel most people are more interested in traveling. I believe we should use our time more meaningfully. Each town has many people in need. Their situations are difficult, and they don't have the means to improve their quality of life. They are individuals who have contributed a lot to the country. Sharing stories with them helps us understand the differences between generations. We can also broaden our knowledge about local history, traditions, and culture through their experiences." },
        { label: "B", color: "speaker-B", text: "My mother told me to do local volunteering because she is part of that organisation, but I'm not into it. I prefer volunteering abroad because I can develop soft skills – something that will benefit my futur e career. Also, meeting new people helps me expand my network and create valuable connections I can use later in my professional life." },
        { label: "C", color: "speaker-C", text: " I'm too busy and rarely have any free time to do anything, so spending even a few hours volunteering is difficult. I would have to take half a day off work. I see many people in need and they genuinely require some extra financial support. That's something I can help with because I earn a good salary. Making monthly donations is not a problem for me it's how I show my support and contribution."},
        { label: "D", color: "speaker-D", text: "I believe there are many ways we can show kindness through volunteering. I'm retired now, and I currently help build houses for people in need. I work with a volunteering organisation that already has clear plans in place. Through this work, I've had the chance to experience different foreign cultures. We're often sent to various countries to carry out these projects, so it's also a great way to travel while doing something meaningful.The job involves manual labour, so we're able to improve our physical health something that some people only begin to notice after a while." }
      ],
      questions: [
        { q: "Who thinks it should help local community?", answer: "A" },
        { q: "Who wants to enhance future career?", answer: "B" },
        { q: "Who helps support charity work with money?", answer: "C" },
        { q: "Who thinks volunteering helps improve physical health?", answer: "D" },
        { q: "Who thinks it can improve knowledge about culture?", answer: "A" },
        { q: "Who wants to make new friends?", answer: "B" },
        {q: "Who thinks it is a way to travel?", answer: "D" },
      ]
    },

    { // Trang 7
      topic: "Choosing a Career ",
      speakers: [
        { label: "A", color: "speaker-A", text: "When I finished school, I didn't really know what I wanted to do. Some people advised me to get a job right away. However, I preferred to gain some practical experience first. That's why I applied for many volunteering roles. Even though I didn't earn any money, I was able to try different kinds of work. Looking back, I'm happy with my decision because of the useful knowledge I gained." },
        { label: "B", color: "speaker-B", text: "I went straight to university after I graduated from high school. I had always wanted to become a teacher, so there was no need to look at other careers. Three months ago, I joined an internship at a local school. It was really an eye-opening experience, although the workload was heavier than I thought. Still, I believe it was very worthwhile." },
        { label: "C", color: "speaker-C", text: "As a child, I lived near a plumber and sometimes worked with her. She asked me to do easy jobs like checking for pipe leaks or fastening the nails with a screw. So later, it felt natural for me to study at university to become an electrician. Now that I see there are short online electrical courses, I wish I had chosen that instead." },
        { label: "D", color: "speaker-D", text: "After school, I wanted some time to figure out what I really wanted. So I started looking for temporary jobs. However, it was difficult to find one because most companies didn't accept people without experience. In the end, a game company contacted me and I agreed to work with them. The job was hybrid, so sometimes I worked in the evenings, but that was fine for me." }
      ],
      questions: [
        { q: "Who think they benefited from working for free?", answer: "A" },
        { q: "Who did not want to change to other careers?", answer: "B" },
        { q: "Who enjoyed working when training?", answer: "B" },
        { q: "Who enjoyed doing things with their hands?", answer: "C" },
        { q: "Who thinks their training was too long?", answer: "C" },
        { q: "Who thinks it was hard to get the first job?", answer: "D" },
        { q: "Who enjoys working in a flexible work environment?", answer: "D" },
      ]
    },

    { // Trang 8
      topic: "Technology 2",
      speakers: [
        { label: "A", color: "speaker-A", text: "As a child, I loved building simple circuits with my parents using basic kits. Now, I work on tech projects with my cousins using drag-and-drop coding platforms. These tools make it easy for us to develop new ideas, even if we’re not experts. I really enjoy how user-friendly these modern platforms are, and they help inspire creativity in our family projects." },
        { label: "B", color: "speaker-B", text: "When I was young, I played with programmable toys like robotic pets that moved when I coded them. I remember how exciting it was to write simple commands and watch the toys respond. Those early experiences taught me about logic and sparked my curiosity about technology. Even now, I look back fondly on those moments because they helped shape my interest in tech." },
        { label: "C", color: "speaker-C", text: "As a kid, I read many books about inventors and their groundbreaking devices. Those stories fueled my imagination and inspired me to dream big. Now, I use 3D modeling software to design prototypes and bring ideas to life. The tools are precise and advanced, but creating feels just as exciting as reading those childhood books." },
        { label: "D", color: "speaker-D", text: "Growing up, I spent hours exploring my family’s old computer, learning basic commands and software. I was fascinated by how computers worked and loved experimenting. Nowadays, I listen to tech podcasts to stay updated on the latest innovations and trends. These podcasts keep me informed and connected to the tech world, and I find them really engaging." }
      ],
      questions: [
        { q: "Who enjoys creating tech projects with family?", answer: "A" },
        { q: "Who finds modern platforms user-friendly?", answer: "A" },
        { q: "Who loved playing with programmable toys as a child?", answer: "B" },
        { q: "Who loved reading about inventions as a child?", answer: "C" },
        { q: "Who now enjoys 3D modeling?", answer: "C" },
        { q: "Who loved exploring early computers as a child?", answer: "D" },
        { q: "Who now prefers tech podcasts?", answer: "D" },
      ]
    },

    { // Trang 9
      topic: "Hobbies",
      speakers: [
        { label: "A", color: "speaker-A", text: "As a child, I loved planting flowers with my parents in our small backyard. Now, I spend weekends gardening with my own kids.Modern tools like automatic sprinklers and soil testers make it easier, but they also make me think more about soil quality and plant types. It's a relaxing hobby, and we enjoy watching our garden bloom together." },
        { label: "B", color: "speaker-B", text: "When I was young, I spent hours playing board games like chess and checkers with my neighborhood friends. I still remember the excitement of planning strategies and winning matches. Those moments taught me teamwork and patience, and I cherish the memories of laughing together over a game." },
        { label: "C", color: "speaker-C", text: "As a kid, I was fascinated by collecting stamps from different countries. The colors and designs sparked my imagination. As an adult, I've shifted to digital photography, capturing landscapes and city scenes. The editing software helps me enhance my photos, making them more vibrant and cre- ative." },
        { label: "D", color: "speaker-D", text: "When I was young, I was always outside playing basketball or cycling with friends. On rainy days, I'd feel restless waiting for the weather to clear. Now, I prefer calmer hobbies like knitting or readingnovels indoors. These activities help me relax and focus, especially after a busy day." }
      ],
      questions: [
        { q: "Who enjoys gardening with family?", answer: "A" },
        { q: "Who finds modern gardening tools more efficient?", answer: "A" },
        { q: "Who enjoys playing board games with friends as a child", answer: "B" },
        { q: "Who loved collecting stamps as a child?", answer: "C" },
        { q: "Who now enjoys digital photography?", answer: "C" },
        { q: "Who loved outdoor sports as a child?", answer: "D" },
        { q: "Who now prefers quiet indoor hobbies?", answer: "D" },
      ]
    },

    { // Trang 10
      topic: "Travel ",
      speakers: [
        { label: "A", color: "speaker-A", text: "I really enjoy traveling! Every time I go to a new place, I feel so excited and refreshed. Traveling gives me the chance to explore different cultures, meet interesting people, and learn new things. Also, when I travel, I often meet people who need help - like tourists who are lost or locals who need support. I love being able to help others in small ways. It makes the trip even more meaningful for me." },
        { label: "B", color: "speaker-B", text: "That sounds great, but honestly, I don’t travel much. My life is really busy with work and other responsibilities. I barely have any free time, so it’s hard for me to plan a trip. However, technology helps a lot. For example, I don’t need to go to the bank anymore - I just pay everything online. It saves me time, so I can focus on my work. Maybe when I’m less busy in the future, I’ll take some time off to travel." },
        { label: "C", color: "speaker-C", text: "I think traveling is not just about relaxing or having fun  it can also help us grow. For example, my mom always encourages me to join group activities and work in teams because it helps improve my communication and cooperation skills. When we travel in a group, we learn how to listen, share, and support each other. It teaches us responsibility and teamwork. So I believe traveling can be a good way to practice those important life skills." },
        { label: "D", color: "speaker-D", text: "I love to travel, but for me, the biggest challenge is money. I don’t have a lot of money right now, so I can’t travel often.That’s why I’ve started saving a little bit each month. I want to plan a trip with my family someday. Even if it’s just a short trip nearby, I believe spending quality time with my family is more valuable than anything else. It’s not about where we go, but who we go with." }
      ],
      questions: [
        { q: "Who enjoys traveling and loves helping others during trips? ", answer: "A" },
        { q: "Who talks about meeting new people and exploring different cultures while traveling?", answer: "A" },
        { q: "Who is too busy with work and doesn't have time to travel?", answer: "B" },
        { q: "Who prefers using online payments instead of going to the bank?", answer: "C" },
        { q: "Who thinks that traveling helps improve teamwork and communication skills?", answer: "C" },
        { q: "Who saves money every month to go on a trip with their family?", answer: "D" },
        { q: "Who believes that the people you travel with are more important than the destination?", answer: "D" },
      ]
    },

  ],

  // ── READING PART 4 ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  reading_p4: [
    { // Trang 1
      topic: "The Arrival of the Four-Day Work Week",
      headings: [
        "- Select -",
        "A way of life now outdated",
        "Benefits for employees",
        "Undesirable financial consequences",
        "Unforeseen challenges for employees",
        "Difficult to give up old habits",
        "An Unfair plan for some people",
        "Alternative solutions worth considering"
      ],
      paragraphs: [
        {
          text: "For many decades, working five or even six days a week was seen as the norm. However, with modern technology, changing values, and a greater focus on work-life balance, that lifestyle is becoming less relevant. Employees and companies alike are beginning to question whether spending most of one's week at work is still necessary or productive.",
          answer: "A way of life now outdated"
        },
        {
          text: "Supporters of the four-day work week argue that it offers numerous advantages for workers. With an extra day off, employees have more time to rest, spend with family, or pursue hobbies. Studies show that many people become more focused and productive when working fewer hours, leading to better performance and increased job satisfaction.",
          answer: "Benefits for employees"
        },
        {
          text: "Despite its appeal, a shorter work week can also lead to financial strain. Businesses may face higher costs due to hiring additional staff or adjusting pay structures. Some industries - especially those that rely on hourly workers - might struggle to maintain profit margins, potentially resulting in reduced services or even layoffs.",
          answer: "Undesirable financial consequences"
        },
        {
          text: "Not all employees adjust easily to a new schedule. Some may find it difficult to complete the same amount of work in fewer days, which can increase pressure and stress. In fast-paced industries, unexpected challenges may arise, such as scheduling conflicts or missed deadlines, making the transition more complicated than expected.",
          answer: "Unforeseen challenges for employees"
        },
        {
          text: "For those who have followed a traditional work schedule for years, switching to a four-day week can be uncomfortable. Old habits and routines are hard to break, and some individuals may resist change even if it's beneficial. It often takes time and support to help people adapt to a new way of working.",
          answer: "Difficult to give up old habits"
        },
        {
          text: "Although the four-day week sounds ideal for many, it might not be fair to everyone. For example, essential workers, healthcare staff, or those in hospitality may not have the option to reduce their hours. This could create inequality between different groups of employees and cause tension in the workplace.",
          answer: "An Unfair plan for some people"
        },
        {
          text: "Rather than applying a four-day week to all companies, experts suggest looking at flexible solutions. Some propose allowing employees to choose their working days, while others support shorter daily hours. These alternatives can offer similar benefits without disrupting businesses that rely on traditional schedules.",
          answer: "Alternative solutions worth considering"
        }
      ]
    },

    { // Trang 2
      topic: "Mountaineering",
      headings: [
        "- Select -",
        "Our changing perceptions toward mountains",
        "A sense of achievement",
        "Publicising one's achievements",
        "A wrong priority",
        "A disturbing revelation",
        "A Focus on sustainability",
        "A more intimate relationship"
      ],
      paragraphs: [
        {
          text: "Even before the nineteenth century, mountains had always exerted a powerful attraction on travelers. They captivated visitors largely because of their natural beauty and the sense of awe inspired by dramatic landscapes. For early explorers, climbing to the summit was primarily about enjoyment and wonder, rather than proving personal strength. In contrast, today the peak is no longer seen merely as a scenic viewpoint but as a highly symbolic destination. Reaching the top has increasingly come to represent success, endurance, and a once-in-a-lifetime accomplishment that many people aspire to achieve.",
          answer: "Our changing perceptions toward mountains"
        },
        {
          text: "For a large number of climbers, conquering a mountain summit embodies profound personal significance. The \"summit\" is often interpreted as a metaphor for success in life, a clear representation of overcoming barriers and pushing human limits. The physical obstacles encountered on the climb mirror psychological struggles, which makes the achievement deeply rewarding. Over time, mountaineering has evolved into a cultural practice where people challenge themselves for adventure, resilience, and self-affirmation. Consequently, the scenery or encounters along the trail have become secondary to the psychological triumph of standing at the very top.",
          answer: "A sense of achievement"
        },
        {
          text: "Mountaineering as a celebrated \"achievement\" has been amplified by the phenomenon of the \"summit selfie.\" Even in the pre-digital era, photographs at the summit were considered valuable mementos, proof of the effort invested. What began as a way to preserve memories gradually turned into an opportunity to broadcast one's success to others. The rise of social media has intensified this trend, as climbers are often more concerned with curating a perfect image than immersing themselves in the experience. In many cases, the journey itself becomes overshadowed by the simple desire to showcase the fact of having reached the summit.",
          answer: "Publicising one's achievements"
        },
        {
          text: "From this picture, critics conclude that the summit has become an end in itself, often detached from the original spirit of exploration. Many people now seem to disregard the multifaceted nature of mountaineering, treating it simply as a fashionable objective. For some, neither the genuine process of climbing nor the authentic arrival at the peak matters, as their motivation is largely external. Furthermore, the preparation that should accompany such an endeavor—rigorous physical training, budgeting, and logistical planning—is frequently underestimated. As a result, the experience risks being superficial, emphasizing prestige rather than true engagement with the mountain.",
          answer: "A wrong priority"
        },
        {
          text: "The photograph captured by Thomas in 1993 exposed the unsettling reality of contemporary mountaineering. It depicted hundreds of people queuing in a single file line to reach the summit-an image that contrasts starkly with the solitude once associated with genuine exploration. The climbers' expressions reflected exhaustion and frustration rather than determination or joy, suggesting that the climb had lost its authenticity. Once published online, the image provoked widespread debate about whether the meaning of summiting had been reduced to mere spectacle. For many critics, it illustrated how the essence of mountaineering has been compromised by mass participation and social validation.",
          answer: "A disturbing revelation"
        },
        {
          text: "One of the most urgent debates surrounding contemporary mountaineering concerns sustainability. Popular climbing destinations often suffer from waste accumulation, environmental degradation, and disrespect for local ecosystems. Many activists argue that this trend-driven approach to climbing must be reconsidered in order to preserve fragile landscapes. Responsibility, they emphasize, should be integral to every stage of the climbing journey, from preparation to leaving the site clean. Ultimately, they believe that the summit can only be considered \"worthwhile\" if the path toward it contributes positively to both the environment and the climber's personal growth.",
          answer: "A new focus on sustainability"
        },
        {
          text: "Perhaps the time has come to reassess our perspective on climbing and return to its more authentic roots. Instead of pursuing mountains solely for recognition, individuals could rediscover the joy of walking, observing, and slowing down. In her autobiography, Cherke described how hiking offered her moments of reflection and a deeper connection with the natural world. Such experiences remind us that mountains provide not only physical challenges but also opportunities for serenity and contemplation. By cultivating a more intimate relationship with nature, climbing may once again regain its balance between personal fulfillment and environmental respect.",
          answer: "A more intimate relationship"
        }
      ]
    }

    ,{ // Trang 3
      topic: "Women Mathematicians/Emmy Noether",
      headings: [
        "- Select -",
        "Gender obscures achievements",
        "Acknowledging achievement of pioneering woman",
        "Men unfairly credited",
        "A long career showing exceptional ability",
        "Labels can change perspective on people",
        "Attempting to create a gender balance",
        "Uniformity is as a disadvantage"
      ],
      paragraphs: [
        {
          text: "In 2014, Maryam Mirzakhani achieved something unexpected-she won the Fields Medal, becoming the first woman ever to receive it. It was a landmark moment in the history of mathematics, yet public reaction was mixed. Much of the media attention focused more on her being a woman than on the substance of her mathematical work. Comparisons with male predecessors sometimes implied her success was less significant. This raised the question: do science and math still implicitly belong to men?",
          answer: "Gender obscures achievements"
        },
        {
          text: "Even before Maryam, women have made noteworthy contributions to mathematics. Maria Gaetana Agnesi, an 18th-century Italian scholar, was the first to author a complete calculus text and to receive a university professorship in mathematics. Her work laid foundations in algebra, calculus, and analytical methods. Agnesi's institutionally sanctioned success showed that precedent for women's excellence existed far earlier than modern discourse often acknowledges.",
          answer: "Acknowledging achievement of pioneering woman"
        },
        {
          text: "Philippa Garrett Fawcett is another such example. In 1890, she scored highest in the Cambridge Mathematical Tripos-more than 13% above the next-highest student-but was denied the formal title of Senior Wrangler because that distinction was reserved only for men. Although she was widely praised and her result was publicly known, she did not receive the official honour. Her case illustrates how institutional practices sidelined women, even when they clearly surpassed the norms. Society applauded her, but did not grant her equal status.",
          answer: "Men unfairly credited"
        },
        {
          text: "Mary Cartwright had a mathematical career spanning over six decades. Her work in nonlinear differential equations laid the groundwork for chaos theory, influencing both mathematics and engineering. Despite the challenges faced by women in academia during her time, she maintained a consistent output of high-quality research throughout her life.",
          answer: "A long career showing exceptional ability"
        },
        {
          text: "When female mathematicians are described as \"women geniuses\" or \"female prodigies,\" the gender label, while well-intended, often implies that excellence is rare among women. Such terms, though celebratory, can unintentionally reinforce the idea that women's success in mathematics is unusual, rather than simply the result of talent and hard work.",
          answer: "Labels can change perspective on people"
        },
        {
          text: "Recognition from awards and institutions has only recently begun to address the imbalance. Historically, major scientific prizes were almost exclusively awarded to men. But as awareness of gender bias has grown, some institutions have introduced policies to ensure women are given fair consideration - for example by selecting women for award shortlists or imposing minimum numbers. These steps have had effects, though critics ask whether they might lead to \"tokenism\" or whether merit is being compromised. Still, many argue that without these interventions, equality cannot be realized.",
          answer: "Attempting to create a gender balance"
        },
        {
          text: "In efforts to level the playing field, some institutions have implemented standardized criteria for admissions or research evaluation. However, such uniform methods can sometimes ignore the diverse paths and challenges faced by individuals, particularly women balancing academic and societal expectations. A one-size-fits-all approach may not always foster true equity.<br><br>Traditions of male dominance continue to influence science and education. Studies confirm that having diverse voices brings more creativity, more robust ideas, better science. When women are excluded or under-recognised, we lose potential breakthroughs. Deep-seated cultural assumptions slow change. For progress, society must act-through education, policy, and cultural change to value ability over gender.",
          answer: "Uniformity is as a disadvantage"
        }
      ]
    }
  ],





  // ── LISTENING PART 1 ──────────────────────────────────────────
  listening_p1: [
    { // Trang 1
      items: [
        {
          situation: "A woman is talking to her coworker.",
          audioSrc: "",
          transcript: "",
          question: "When does the meeting start?",
          options: ["10:00", "10:15", "11:15"],
          answer: "10:15"
        }
      ]
    },
    { // Trang 2
      items: [
        {
          situation: "Listen to the conversation.",
          audioSrc: "",
          transcript: "",
          question: "Why did David call Peter?",
          options: ["To suggest a drink", "To ask for help", "To cancel a meeting"],
          answer: "To suggest a drink"
        }
      ]
    },
    { // Trang 3
      items: [
        {
          situation: "Listen to the conversation.",
          audioSrc: "",
          transcript: "",
          question: "Why did he call his mother to pick him up at the airport?",
          options: ["He is sick", "He has too much luggage", "He missed the bus"],
          answer: "He is sick"
        }
      ]
    },
    { // Trang 4
      items: [
        {
          situation: "Anne is calling her daughter Sally.",
          audioSrc: "",
          transcript: "",
          question: "What does Anne need?",
          options: ["Eggs", "Bread", "Milk"],
          answer: "Eggs"
        }
      ]
    },
    { // Trang 5
      items: [
        {
          situation: "Samia is going to meet her friends.",
          audioSrc: "",
          transcript: "",
          question: "What time are they going to meet?",
          options: ["9:00", "10:00", "9:30"],
          answer: "10:00"
        }
      ]
    },
    { // Trang 6
      items: [
        {
          situation: "Anna is calling her brother Max.",
          audioSrc: "",
          transcript: "",
          question: "What does Anna do later in the afternoon?",
          options: ["Hang out with friends", "Stay late at the office", "Pick up her kids"],
          answer: "Stay late at the office"
        }
      ]
    },
    { // Trang 7
      items: [
        {
          situation: "A woman is talking about her favorite film on the radio.",
          audioSrc: "",
          transcript: "",
          question: "What film did she recommend?",
          options: ["A comedy", "A romantic film", "An action film"],
          answer: "An action film"
        }
      ]
    },
    { // Trang 8
      items: [
        {
          situation: "A teacher is talking to her students.",
          audioSrc: "",
          transcript: "",
          question: "Where are the students now?",
          options: ["At school", "In a townhouse", "In a museum"],
          answer: "In a townhouse"
        }
      ]
    },
    { // Trang 9
      items: [
        {
          situation: "Greg is talking about a working day in his life.",
          audioSrc: "",
          transcript: "",
          question: "How does he go to work?",
          options: ["By bus", "By bike", "On foot"],
          answer: "By bus"
        }
      ]
    },
    { // Trang 10
      items: [
        {
          situation: "Listen to a nutrition expert.",
          audioSrc: "",
          transcript: "",
          question: "What time is the best for children to eat fruit?",
          options: ["In the evening", "In the afternoon", "In the morning"],
          answer: "In the morning"
        }
      ]
    },
    { // Trang 11
      items: [
        {
          situation: "Listen to a woman explaining her morning routine to her friend.",
          audioSrc: "",
          transcript: "",
          question: "Why do women get up early?",
          options: ["Have some quiet time", "To go to work early", "To take care of children"],
          answer: "Have some quiet time"
        }
      ]
    },
    { // Trang 12
      items: [
        {
          situation: "Listen to the conversation.",
          audioSrc: "",
          transcript: "",
          question: "Why does he need to learn to drive a car?",
          options: ["He lost his driving license", "He has to drive to work", "He bought a new car"],
          answer: "He has to drive to work"
        }
      ]
    },
    { // Trang 13
      items: [
        {
          situation: "Two friends are talking with each other.",
          audioSrc: "",
          transcript: "",
          question: "What did they both buy?",
          options: ["Clothes", "Tea", "Cakes"],
          answer: "Clothes"
        }
      ]
    },
    { // Trang 14
      items: [
        {
          situation: "A man is describing his school.",
          audioSrc: "",
          transcript: "",
          question: "What color is the teacher's building?",
          options: ["Blue", "White", "Yellow"],
          answer: "White"
        }
      ]
    }
  ],

  // ── LISTENING PART 2 ──────────────────────────────────────────
  listening_p2: [
    { // Trang 1
      situation: "Write a short text (20-30 words).",
      speakers: [
        { label: "A", audioSrc: "", transcript: "I always bring reusable bags..." },
        { label: "B", audioSrc: "", transcript: "My company recently switched to solar energy..." }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "Reduces plastic use", "Uses renewable energy"], answer: "Reduces plastic use" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "Reduces plastic use", "Uses renewable energy"], answer: "Uses renewable energy" }
      ]
    }
  ],

  // ── LISTENING PART 3 ──────────────────────────────────────────
  listening_p3: [
    { // Trang 1
      situation: "Who expresses which opinion?",
      audioSrc: "",
      transcript: "A: I think continuity is really important. B: True. And technology is definitely improving.",
      speakers_in_audio: ["A", "B"],
      questions: [
        { stmt: "Continuity is important in the workplace", answer: "A" },
        { stmt: "Technology is good for the economy", answer: "B" }
      ]
    }
  ],

  // ── LISTENING PART 4 ──────────────────────────────────────────
  listening_p4: [
    { // Trang 1
      situation: "A critic talks about a New series",
      audioSrc: "",
      transcript: "The new series has some interesting ideas...",
      questions: [
        { q: "What is one criticism mentioned regarding the series' storytelling?", options: ["The dialogues", "The pilot is overly complicated"], answer: "The pilot is overly complicated" }
      ]
    }
  ]
};

// ═══════════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════════
let currentSkill = '';
let currentPart = 0;
let quizState = {
  type: '',         
  dataIndex: 0, // Dùng làm index số Trang hiện tại
  answers: {},       
  submitted: false
};

// ═══════════════════════════════════════════════════════════════
//  NAVIGATION SPA
// ═══════════════════════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0); 
}

function goHome() {
  closeResult();
  showScreen('home-screen');
  document.getElementById('exam-header').style.display = 'none';
  document.getElementById('submit-area').style.display = 'none';
  document.getElementById('config-btn').classList.remove('show');
  setProgress(0);
}

function goSkill(skill) {
  currentSkill = skill;
  document.getElementById('part-screen-title').textContent = skill === 'reading' ? 'Reading' : 'Listening';
  renderPartCards(skill);
  showScreen('part-screen');
}

function renderPartCards(skill) {
  const container = document.getElementById('part-cards-container');
  const parts = skill === 'reading'
    ? [ { num: 'Part 1', name: 'Fill in the gap', desc: 'Chọn từ điền vào chỗ trống' }, { num: 'Part 2', name: 'Sentence ordering', desc: 'Kéo thả sắp xếp câu' }, { num: 'Part 3', name: 'Multiple matching', desc: 'Match người với ý kiến' }, { num: 'Part 4', name: 'Heading matching', desc: 'Chọn tiêu đề cho đoạn' } ]
    : [ { num: 'Part 1', name: 'Short audio MCQ', desc: 'Nghe audio chọn đáp án' }, { num: 'Part 2', name: 'Speaker matching', desc: 'Nghe nhiều speaker, match' }, { num: 'Part 3', name: 'Opinion matching', desc: 'Nghe & match ý kiến' }, { num: 'Part 4', name: 'Multi-question', desc: 'Nghe 1 audio, nhiều câu' } ];

  container.innerHTML = parts.map((p, i) => `
    <div class="part-card" onclick="goQuiz('${skill}', ${i+1})">
      <div class="p-num">${p.num}</div>
      <div class="p-name">${p.name}</div>
      <div class="p-desc">${p.desc}</div>
    </div>
  `).join('');
}

function goQuiz(skill, part) {
  currentPart = part;
  const typeMap = { reading: ['r1','r2','r3','r4'], listening: ['l1','l2','l3','l4'] };
  // Thêm shuffledFlags: {} vào đây để reset xáo trộn mỗi khi chọn bài mới
  quizState = { type: typeMap[skill][part - 1], dataIndex: 0, answers: {}, submitted: false, shuffledFlags: {} };

  showScreen('quiz-screen');
  document.getElementById('exam-header').style.display = 'flex';
  document.getElementById('submit-area').style.display = 'flex';
  document.getElementById('config-btn').classList.add('show');
  document.getElementById('btn-retry').style.display = 'none';
  document.getElementById('btn-submit').disabled = false;
  document.getElementById('btn-submit').textContent = 'Nộp bài';
  document.getElementById('score-badge').textContent = '';

  updateHeader();
  renderQuizContent();
  updateProgress();
}

function updateHeader() {
  const skillLabel = currentSkill === 'reading' ? 'Reading' : 'Listening';
  document.getElementById('header-title').textContent = `${skillLabel} Part ${currentPart}`;
  updateCounter();
}

function updateCounter() {
  const dataArr = getDataArray();
  // Hiển thị tiến độ câu hỏi tổng thể
  document.getElementById('header-counter').textContent = `Trang ${quizState.dataIndex + 1} / ${dataArr.length}`;
}

function getDataArray() {
  const map = { r1:'reading_p1', r2:'reading_p2', r3:'reading_p3', r4:'reading_p4', l1:'listening_p1', l2:'listening_p2', l3:'listening_p3', l4:'listening_p4' };
  return DATA[map[quizState.type]];
}

function changePage(step) {
  const data = getDataArray();
  const newIndex = quizState.dataIndex + step;
  if (newIndex >= 0 && newIndex < data.length) {
    quizState.dataIndex = newIndex;
    updateHeader();
    renderQuizContent();
    window.scrollTo(0, 0);
  }
}

// ═══════════════════════════════════════════════════════════════
//  RENDER QUIZ CONTENT (CHỈ RENDER TRANG HIỆN TẠI)
// ═══════════════════════════════════════════════════════════════
function renderQuizContent() {
  const wrapper = document.getElementById('quiz-wrapper');
  wrapper.innerHTML = '';
  const { type } = quizState;
  
  if      (type === 'r1') renderR1(wrapper);
  else if (type === 'r2') renderR2(wrapper);
  else if (type === 'r3') renderR3(wrapper);
  else if (type === 'r4') renderR4(wrapper);
  else if (type === 'l1') renderL1(wrapper);
  else if (type === 'l2') renderL2(wrapper);
  else if (type === 'l3') renderL3(wrapper);
  else if (type === 'l4') renderL4(wrapper);

  renderPaginationControls(wrapper);
  restoreUIFeedback(); // Khôi phục trạng thái đúng/sai nếu đã làm trang này
}

function renderPaginationControls(wrapper) {
  const totalPages = getDataArray().length;
  const navDiv = document.createElement('div');
  navDiv.className = 'quiz-nav';
  navDiv.innerHTML = `
    <button onclick="changePage(-1)" ${quizState.dataIndex === 0 ? 'disabled' : ''}>← Trang trước</button>
    <span class="page-info">Trang ${quizState.dataIndex + 1} / ${totalPages}</span>
    <button onclick="changePage(1)" ${quizState.dataIndex === totalPages - 1 ? 'disabled' : ''}>Trang tiếp →</button>
  `;
  wrapper.appendChild(navDiv);
}

function renderR1(wrapper) {
  const page = quizState.dataIndex;
  const group = DATA.reading_p1[page];
  if(!group) return;
  group.items.forEach((item, i) => {
    const key = `r1-${page}-${i}`;
    const savedVal = quizState.answers[key] || '';
    const div = document.createElement('div');
    div.className = 'r1-sentence';
    div.innerHTML = `
      <span>${item.before}</span>
      <select id="${key}" onchange="storeAnswer('${key}', this.value)">
        <option value="">▾</option>
        ${item.options.map(o => `<option value="${o}" ${savedVal === o ? 'selected' : ''}>${o}</option>`).join('')}
      </select>
      <span>${item.after}</span>
    `;
    wrapper.appendChild(div);
  });
}

function renderR2(wrapper) {
  const page = quizState.dataIndex;
  const set = DATA.reading_p2[page];
  if(!set) return;
  const shuffled = [...set.sentences].sort(() => Math.random() - 0.5);
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="r2-header">📝 ${set.topic} — Sắp xếp câu theo thứ tự đúng</div>
    <div class="r2-layout">
      <div>
        <div class="r2-col-label">YOUR ORDER</div>
        ${set.sentences.map((_, k) => {
          const key = `r2-${page}-${k}`;
          const savedVal = quizState.answers[key] || '';
          return `
          <div class="r2-drop-zone" id="${key}" data-value="${savedVal}"
            ondragover="r2DragOver(event)" ondrop="r2Drop(event,'${key}')" ondragleave="r2DragLeave(event)">
            <span class="slot-num">${k+1}</span>
            <span class="slot-text">${savedVal ? savedVal : 'Drop a sentence here...'}</span>
          </div>`;
        }).join('')}
      </div>
      <div>
        <div class="r2-col-label">SENTENCES (TAP/DRAG)</div>
        <div id="r2-pool-${page}">
          ${shuffled.map((s, j) => `
            <div class="r2-drag-item" draggable="true" id="r2-item-${page}-${j}"
              data-text="${encodeURIComponent(s)}"
              ondragstart="r2DragStart(event,'${page}','${j}')"
              ondragend="r2DragEnd(event)"
              onclick="r2TapSelect(event,'${page}','${j}')">
              <span class="drag-handle">≡</span>
              <span>${s}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `;
  wrapper.appendChild(div);
}

// Logic Kéo Thả R2
let dragSrc = null;
let r2Selected = null;
function r2TapSelect(e, page, ji) {
  const el = e.currentTarget;
  if (r2Selected && r2Selected !== el) r2Selected.style.outline = '';
  if (r2Selected === el) { r2Selected.style.outline = ''; r2Selected = null; return; }
  r2Selected = el;
  el.style.outline = '2px solid #6c63ff';
}
function r2DragStart(e, page, ji) {
  dragSrc = e.currentTarget; dragSrc.classList.add('dragging');
  e.dataTransfer.setData('text/plain', JSON.stringify({ page, ji }));
}
function r2DragEnd(e) { e.currentTarget.classList.remove('dragging'); }
function r2DragOver(e) { e.preventDefault(); e.currentTarget.classList.add('drag-over'); }
function r2DragLeave(e) { e.currentTarget.classList.remove('drag-over'); }
function r2Drop(e, key) {
  e.preventDefault();
  const zone = e.currentTarget; zone.classList.remove('drag-over');
  const data = JSON.parse(e.dataTransfer.getData('text/plain'));
  const item = document.getElementById(`r2-item-${data.page}-${data.ji}`);
  if (!item) return;
  const text = decodeURIComponent(item.dataset.text);
  zone.dataset.value = text;
  const k = key.split('-')[2];
  zone.innerHTML = `<span class="slot-num">${parseInt(k)+1}</span><span class="slot-text">${text}</span>`;
  item.style.opacity = '0.3';
  storeAnswer(key, text);
}

function renderR3(wrapper) {
  const page = quizState.dataIndex;
  const set = DATA.reading_p3[page];
  if(!set) return;

  // XÁO TRỘN CÂU HỎI (Chỉ chạy 1 lần cho mỗi trang trong 1 lượt làm)
  if (!quizState.shuffledFlags) quizState.shuffledFlags = {};
  if (!quizState.shuffledFlags[`r3-${page}`]) {
    for (let i = set.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Đổi chỗ 2 phần tử
      [set.questions[i], set.questions[j]] = [set.questions[j], set.questions[i]];
    }
    quizState.shuffledFlags[`r3-${page}`] = true; // Đánh dấu là trang này đã xáo xong
  }

  const labels = set.speakers.map(s => s.label);
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="r3-layout">
      <div class="r3-texts-col">
        <div class="r2-col-label" style="margin-bottom:10px">TEXTS (${labels.join(' - ')})</div>
        ${set.speakers.map(sp => `
          <div class="r3-text-block ${sp.color}">
            <div class="speaker-label"><span>${sp.label}</span></div>
            <div>${sp.text}</div>
          </div>
        `).join('')}
      </div>
      <div>
        <div class="r2-col-label" style="margin-bottom:10px">QUESTIONS</div>
        ${set.questions.map((qo, qi) => {
          const key = `r3-${page}-${qi}`;
          const savedVal = quizState.answers[key] || '';
          return `
          <div class="r3-q-block">
            <div class="q-text">${qi+1}. ${qo.q}</div>
            <select id="${key}" onchange="storeAnswer('${key}', this.value)">
              <option value="">- Select person -</option>
              ${labels.map(l => `<option value="${l}" ${savedVal === l ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
  wrapper.appendChild(div);
}

function renderR4(wrapper) {
  const page = quizState.dataIndex;
  const set = DATA.reading_p4[page];
  if(!set) return;

  // XÁO TRỘN ĐOẠN VĂN (Chỉ chạy 1 lần cho mỗi trang trong 1 lượt làm)
  if (!quizState.shuffledFlags) quizState.shuffledFlags = {};
  if (!quizState.shuffledFlags[`r4-${page}`]) {
    for (let i = set.paragraphs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [set.paragraphs[i], set.paragraphs[j]] = [set.paragraphs[j], set.paragraphs[i]];
    }
    quizState.shuffledFlags[`r4-${page}`] = true;
  }

  const div = document.createElement('div');
  div.innerHTML = set.paragraphs.map((p, pi) => {
    const key = `r4-${page}-${pi}`;
    const savedVal = quizState.answers[key] || '';
    return `
      <div class="r4-block">
        <select id="${key}" onchange="storeAnswer('${key}', this.value)">
          ${set.headings.map(h => `<option value="${h === '- Select -' ? '' : h}" ${savedVal === h ? 'selected' : ''}>${h}</option>`).join('')}
        </select>
        <div class="para-text"><span class="para-num">${pi+1}.</span>${p.text}</div>
      </div>`;
  }).join('');
  wrapper.appendChild(div);
}

function renderL1(wrapper) {
  const page = quizState.dataIndex;
  const group = DATA.listening_p1[page];
  if(!group) return;

  // XÁO TRỘN CÂU HỎI VÀ ĐÁP ÁN (Chỉ chạy 1 lần cho mỗi trang)
  if (!quizState.shuffledFlags) quizState.shuffledFlags = {};
  if (!quizState.shuffledFlags[`l1-${page}`]) {
    // 1. Đảo lộn vị trí các câu hỏi với nhau
    for (let i = group.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [group.items[i], group.items[j]] = [group.items[j], group.items[i]];
    }
    // 2. Đảo lộn vị trí các Option (A, B, C) bên trong từng câu
    group.items.forEach(item => {
      for (let i = item.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [item.options[i], item.options[j]] = [item.options[j], item.options[i]];
      }
    });
    quizState.shuffledFlags[`l1-${page}`] = true;
  }

  // VẼ GIAO DIỆN (Đã bỏ khung Situation và Audio)
  group.items.forEach((item, i) => {
    const key = `l1-${page}-${i}`;
    const savedVal = quizState.answers[key] || '';
    const div = document.createElement('div');
    div.className = 'l1-block';
    div.innerHTML = `
      <div class="l1-q-label">CÂU HỎI</div>
      <div class="l1-q-text" style="font-size: 1.1rem; margin-bottom: 20px;">${item.question}</div>
      <div class="l1-options">
        ${item.options.map((o) => `
          <label class="l1-option">
            <input type="radio" name="${key}" value="${o}" ${savedVal === o ? 'checked' : ''} onchange="storeAnswer('${key}','${o}')"> ${o}
          </label>`).join('')}
      </div>
    `;
    wrapper.appendChild(div);
  });
}

function renderL2(wrapper) {
  const page = quizState.dataIndex;
  const set = DATA.listening_p2[page];
  if(!set) return;
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="l2-header">📝 ${set.situation}</div>
    <div class="l2-speakers">
      ${set.speakers.map((sp, spi) => `
        <div class="l2-speaker-card">
          <div class="l2-speaker-label">Speaker ${sp.label}
            <button class="l2-transcript-btn" onclick="toggleTranscript('l2-tr-${page}-${spi}')">Xem</button>
          </div>
          ${sp.audioSrc ? `<audio controls><source src="${sp.audioSrc}" type="audio/mpeg"></audio>` : `<div style="font-size:0.78rem;color:#aaa;padding:6px 0;">🔈 Chưa có audio</div>`}
          <div class="l2-transcript" id="l2-tr-${page}-${spi}">${sp.transcript}</div>
        </div>
      `).join('')}
    </div>
    <div class="l2-q-section">
      <div class="l2-q-label">CÂU HỎI</div>
      ${set.questions.map((q, qi) => {
        const key = `l2-${page}-${qi}`;
        const savedVal = quizState.answers[key] || '';
        return `
        <div class="l2-match-row">
          <label>${q.q}</label>
          <select id="${key}" onchange="storeAnswer('${key}', this.value)">
            ${q.options.map(o => `<option value="${o === q.options[0] ? '' : o}" ${savedVal === o ? 'selected' : ''}>${o}</option>`).join('')}
          </select>
        </div>`;
      }).join('')}
    </div>
  `;
  wrapper.appendChild(div);
}

function renderL3(wrapper) {
  const page = quizState.dataIndex;
  const item = DATA.listening_p3[page];
  if(!item) return;
  const div = document.createElement('div');
  div.className = 'l3-block';
  div.innerHTML = `
    <div class="l3-situation">${item.situation}</div>
    <div class="l3-audio">
      ${item.audioSrc ? `<audio controls><source src="${item.audioSrc}" type="audio/mpeg"></audio>` : `<div style="background:#f0f0f0;padding:12px 16px;border-radius:8px;font-size:0.82rem;color:#888;">🔈 [Chưa có file audio]</div>`}
      <button class="l3-transcript-btn" onclick="toggleTranscript('l3-tr-${page}')">Xem mô tả</button>
      <div class="l3-transcript" id="l3-tr-${page}">${item.transcript}</div>
    </div>
    <div class="l3-q-label">CÂU HỎI</div>
    ${item.questions.map((q, qi) => {
      const key = `l3-${page}-${qi}`;
      const savedVal = quizState.answers[key] || '';
      return `
      <div class="l3-opinion-row">
        <div class="stmt">${qi+1}. ${q.stmt}</div>
        <select id="${key}" onchange="storeAnswer('${key}', this.value)">
          <option value="">-- Chọn --</option>
          ${item.speakers_in_audio.map(s => `<option value="${s}" ${savedVal === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </div>`;
    }).join('')}
  `;
  wrapper.appendChild(div);
}

function renderL4(wrapper) {
  const page = quizState.dataIndex;
  const item = DATA.listening_p4[page];
  if(!item) return;
  const div = document.createElement('div');
  div.className = 'l4-block';
  div.innerHTML = `
    <div class="l4-situation">${item.situation}</div>
    <div class="l4-audio">
      ${item.audioSrc ? `<audio controls><source src="${item.audioSrc}" type="audio/mpeg"></audio>` : `<div style="background:#f0f0f0;padding:12px 16px;border-radius:8px;font-size:0.82rem;color:#888;">🔈 [Chưa có file audio]</div>`}
      <button class="l4-transcript-btn" onclick="toggleTranscript('l4-tr-${page}')">Xem mô tả</button>
      <div class="l4-transcript" id="l4-tr-${page}">${item.transcript}</div>
    </div>
    <div class="l4-q-label" style="font-size:0.8rem;color:#888;font-weight:700;text-transform:uppercase;margin-bottom:10px;">CÂU HỎI</div>
    ${item.questions.map((q, qi) => {
      const key = `l4-${page}-${qi}`;
      const savedVal = quizState.answers[key] || '';
      return `
      <div class="l4-sub-block">
        <div class="l4-sub-q">${q.q}</div>
        <div class="l4-options">
          ${q.options.map((o) => `
            <label class="l4-option">
              <input type="radio" name="${key}" value="${o}" ${savedVal === o ? 'checked' : ''} onchange="storeAnswer('${key}','${o}')"> ${o}
            </label>`).join('')}
        </div>
      </div>`;
    }).join('')}
  `;
  wrapper.appendChild(div);
}

// ═══════════════════════════════════════════════════════════════
//  KIỂM TRA ĐÚNG/SAI NGAY LẬP TỨC VÀ LƯU TRẠNG THÁI
// ═══════════════════════════════════════════════════════════════

function storeAnswer(key, value) {
  quizState.answers[key] = value;
  updateProgress();
  checkAnswerUI(key); // Gọi hàm tô màu xanh đỏ
}

function getCorrectAnswerFor(key) {
  const parts = key.split('-');
  const type = parts[0];
  const page = parseInt(parts[1]);
  const index = parseInt(parts[2]);

  if (type === 'r1') return DATA.reading_p1[page].items[index].answer;
  if (type === 'r2') return DATA.reading_p2[page].sentences[index];
  if (type === 'r3') return DATA.reading_p3[page].questions[index].answer;
  if (type === 'r4') return DATA.reading_p4[page].paragraphs[index].answer;
  if (type === 'l1') return DATA.listening_p1[page].items[index].answer;
  if (type === 'l2') return DATA.listening_p2[page].questions[index].answer;
  if (type === 'l3') return DATA.listening_p3[page].questions[index].answer;
  if (type === 'l4') return DATA.listening_p4[page].questions[index].answer;
  return null;
}

function checkAnswerUI(key) {
  const val = quizState.answers[key];
  if (!val) return;
  const correct = getCorrectAnswerFor(key);
  const type = key.split('-')[0];

  if (type === 'r2') {
    const zone = document.getElementById(key);
    if(zone) {
      zone.classList.remove('correct-zone', 'wrong-zone');
      zone.classList.add(val === correct ? 'correct-zone' : 'wrong-zone');
    }
  } else if (type === 'l1' || type === 'l4') {
    const allOpts = document.querySelectorAll(`input[name="${key}"]`);
    allOpts.forEach(opt => {
      const label = opt.closest('.l1-option, .l4-option');
      label.classList.remove('correct-opt', 'wrong-opt');
      if(opt.checked) {
        label.classList.add(opt.value === correct ? 'correct-opt' : 'wrong-opt');
      }
    });
  } else {
    const sel = document.getElementById(key);
    if(sel) {
      sel.classList.remove('correct-ans', 'wrong-ans');
      sel.classList.add(val === correct ? 'correct-ans' : 'wrong-ans');
    }
  }
}

function restoreUIFeedback() {
  // Quét toàn bộ đáp án đã lưu, nếu trùng với page hiện tại thì tô màu lại
  Object.keys(quizState.answers).forEach(key => {
    const parts = key.split('-');
    if (parseInt(parts[1]) === quizState.dataIndex) {
      checkAnswerUI(key);
    }
  });
}

function updateProgress() {
  const totalKeys = getTotalAnswerKeys();
  const filled = Object.values(quizState.answers).filter(v => v && v !== '').length;
  const pct = totalKeys > 0 ? Math.min(100, (filled / totalKeys) * 100) : 0;
  document.getElementById('top-progress-fill').style.width = pct + '%';
}

function getTotalAnswerKeys() {
  const { type } = quizState;
  if (type === 'r1') return DATA.reading_p1.reduce((acc, page) => acc + page.items.length, 0);
  if (type === 'r2') return DATA.reading_p2.reduce((acc, page) => acc + page.sentences.length, 0);
  if (type === 'r3') return DATA.reading_p3.reduce((acc, page) => acc + page.questions.length, 0);
  if (type === 'r4') return DATA.reading_p4.reduce((acc, page) => acc + page.paragraphs.length, 0);
  if (type === 'l1') return DATA.listening_p1.reduce((acc, page) => acc + page.items.length, 0);
  if (type === 'l2') return DATA.listening_p2.reduce((acc, page) => acc + page.questions.length, 0);
  if (type === 'l3') return DATA.listening_p3.reduce((acc, page) => acc + page.questions.length, 0);
  if (type === 'l4') return DATA.listening_p4.reduce((acc, page) => acc + page.questions.length, 0);
  return 1;
}

// ═══════════════════════════════════════════════════════════════
//  SUBMIT TỔNG KẾT (Chỉ để hiện popup điểm cuối cùng)
// ═══════════════════════════════════════════════════════════════
function submitQuiz() {
  if (quizState.submitted) return;
  quizState.submitted = true;
  document.getElementById('btn-submit').disabled = true;

  let correct = 0;
  let total = getTotalAnswerKeys();

  Object.keys(quizState.answers).forEach(key => {
    const val = quizState.answers[key];
    const expected = getCorrectAnswerFor(key);
    if (val && val === expected) correct++;
  });

  const pct = total > 0 ? Math.round(correct / total * 100) : 0;
  document.getElementById('result-score').textContent = `${correct} / ${total}`;
  document.getElementById('result-emoji').textContent = pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚';
  document.getElementById('result-msg').textContent =
    pct >= 80 ? 'Xuất sắc! Bạn đã làm rất tốt!' :
    pct >= 50 ? 'Khá tốt! Cố gắng luyện thêm nhé.' :
    'Cần luyện tập thêm. Đừng nản nhé!';
  
  document.getElementById('btn-retry-result').style.display = correct < total ? 'inline-block' : 'none';
  document.getElementById('result-overlay').classList.add('show');
}

function closeResult() { document.getElementById('result-overlay').classList.remove('show'); }
function retryFromResult() { closeResult(); retryWrong(); }
function retryWrong() {
  quizState.answers = {};
  quizState.submitted = false;
  document.getElementById('btn-submit').disabled = false;
  quizState.dataIndex = 0; // Quay về trang 1
  quizState.shuffledFlags = {}; // Xóa cờ xáo trộn để đảo lại thứ tự mới
  updateHeader();
  renderQuizContent();
  updateProgress();
}
function toggleTranscript(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

// ═══════════════════════════════════════════════════════════════
// TÙY CHỈNH CÂU HỎI BẰNG GIAO DIỆN
// ═══════════════════════════════════════════════════════════════
function openConfig() {
  const body = document.getElementById('config-body');
  const typeMap = {
    r1: ['Reading Part 1', DATA.reading_p1], r2: ['Reading Part 2', DATA.reading_p2],
    r3: ['Reading Part 3', DATA.reading_p3], r4: ['Reading Part 4', DATA.reading_p4],
    l1: ['Listening Part 1', DATA.listening_p1], l2: ['Listening Part 2', DATA.listening_p2],
    l3: ['Listening Part 3', DATA.listening_p3], l4: ['Listening Part 4', DATA.listening_p4]
  };
  const [title, data] = typeMap[quizState.type];
  body.innerHTML = `
    <p style="font-size:0.85rem;color:#666;margin-bottom:12px;">Chỉnh sửa ${title} (JSON format).<br>Lưu ý: Dữ liệu giờ đã được bọc trong mảng <code>items</code> cho từng trang.</p>
    <textarea id="cfg-input" style="min-height:350px">${JSON.stringify(data, null, 2)}</textarea>
  `;
  document.getElementById('config-overlay').classList.add('show');
  document.getElementById('config-panel').classList.add('open');
}

function closeConfig() {
  document.getElementById('config-overlay').classList.remove('show');
  document.getElementById('config-panel').classList.remove('open');
}

function saveConfig() {
  const raw = document.getElementById('cfg-input').value;
  try {
    const parsed = JSON.parse(raw);
    const keyMap = { r1:'reading_p1', r2:'reading_p2', r3:'reading_p3', r4:'reading_p4', l1:'listening_p1', l2:'listening_p2', l3:'listening_p3', l4:'listening_p4' };
    DATA[keyMap[quizState.type]] = parsed;
    closeConfig();
    retryWrong();
  } catch(e) {
    alert('❌ JSON không hợp lệ!\n\n' + e.message);
  }
}

document.getElementById('config-btn').addEventListener('click', openConfig);
document.getElementById('back-btn').addEventListener('click', () => {
  goSkill(currentSkill); showScreen('part-screen');
  document.getElementById('exam-header').style.display = 'none';
  document.getElementById('submit-area').style.display = 'none';
  document.getElementById('config-btn').classList.remove('show');
});
