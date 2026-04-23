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
    },
    ,{ // Trang 15
      items: [{
        situation: "Louis is calling his friend Standar.",
        audioSrc: "", transcript: "",
        question: "Where will Luis meet Standar?",
        options: ["Outside the station", "At the cafe", "Near the ticket counter"],
        answer: "Outside the station"
      }]
    },
    { // Trang 16
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What time do they meet?",
        options: ["7:00", "7:30", "8:00"],
        answer: "7:30"
      }]
    },
    { // Trang 17
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What day do they walk?",
        options: ["Saturday", "Sunday", "Monday"],
        answer: "Sunday"
      }]
    },
    { // Trang 18
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What does she forget?",
        options: ["Phone", "Wallet", "Watch"],
        answer: "Watch"
      }]
    },
    { // Trang 19
      items: [{
        situation: "A woman is talking about shopping places.",
        audioSrc: "", transcript: "",
        question: "Where is she going to go shopping?",
        options: ["At the downtown market", "At a new shopping center", "At the mall"],
        answer: "At a new shopping center"
      }]
    },
    { // Trang 20
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What color is the door of the house?",
        options: ["Red", "Blue", "Green"],
        answer: "Blue"
      }]
    },
    { // Trang 21
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What did he like when he studied at university?",
        options: ["Group work", "Lectures", "Self-study"],
        answer: "Group work"
      }]
    },
    { // Trang 22
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "How does the old teacher look like?",
        options: ["Black hair", "Grey hair", "Bald"],
        answer: "Black hair"
      }]
    },
    { // Trang 23
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "How long is the assignment?",
        options: ["10 pages", "15 pages", "20 pages"],
        answer: "15 pages"
      }]
    },
    { // Trang 24
      items: [{
        situation: "A tour guide is making an announcement.",
        audioSrc: "", transcript: "",
        question: "Why was the tour canceled?",
        options: ["Not enough people", "Bad weather", "Transportation problems"],
        answer: "Not enough people"
      }]
    },
    { // Trang 25
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What award does the film win?",
        options: ["Photography", "Best actor", "Best director"],
        answer: "Photography"
      }]
    },
    { // Trang 26
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What can we do on the top floor of the hotel?",
        options: ["Do exercise", "Have dinner", "Swim"],
        answer: "Do exercise"
      }]
    },
    { // Trang 27
      items: [{
        situation: "A woman is talking to the police.",
        audioSrc: "", transcript: "",
        question: "What did she lose?",
        options: ["A necklace", "A bag", "A wallet"],
        answer: "A bag"
      }]
    },
    { // Trang 28
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What is not working?",
        options: ["Printer", "Computer", "Phone"],
        answer: "Computer"
      }]
    },
    { // Trang 29
      items: [{
        situation: "Jane is calling her friend Martha.",
        audioSrc: "", transcript: "",
        question: "What time are they going to meet?",
        options: ["4:00", "5:30", "6:00"],
        answer: "5:30"
      }]
    },
    { // Trang 30
      items: [{
        situation: "A saleswoman is talking to her customer.",
        audioSrc: "", transcript: "",
        question: "How much is the cheapest computer in the shop?",
        options: ["135 pounds", "145 pounds", "155 pounds"],
        answer: "135 pounds"
      }]
    },
    { // Trang 31
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What is Mary's number?",
        options: ["5553920", "5553921", "5553922"],
        answer: "5553920"
      }]
    },
    { // Trang 32
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "How many pages of the assignment?",
        options: ["Three", "Four", "Five"],
        answer: "Four"
      }]
    },
    { // Trang 33
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What is the woman doing?",
        options: ["Cooking", "Cleaning", "Washing"],
        answer: "Cleaning"
      }]
    },
    { // Trang 34
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What are they going to do on this holiday?",
        options: ["Teaching", "Traveling", "Relaxing"],
        answer: "Teaching"
      }]
    },
    { // Trang 35
      items: [{
        situation: "A tour guide is introducing a famous building.",
        audioSrc: "", transcript: "",
        question: "What is this building currently used for?",
        options: ["A museum", "A department store", "A cinema"],
        answer: "A department store"
      }]
    },
    { // Trang 36
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "How much is the coffee?",
        options: ["3.99", "4.99", "5.99"],
        answer: "4.99"
      }]
    },
    { // Trang 37
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What is the main change the managers are going to make?",
        options: ["Adjust the schedule", "Hire new staff", "Change the location"],
        answer: "Adjust the schedule"
      }]
    },
    { // Trang 38
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "Which traffic does he get?",
        options: ["Bus", "Train", "Car"],
        answer: "Train"
      }]
    },
    { // Trang 39
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What is the outfit of the girl?",
        options: ["Dress", "Shirt", "Skirt"],
        answer: "Shirt"
      }]
    },
    { // Trang 40
      items: [{
        situation: "Listen to Anna talking about her routine.",
        audioSrc: "", transcript: "",
        question: "Where does Anna go for a walk every morning?",
        options: ["Park", "Neighborhood", "College"],
        answer: "College"
      }]
    },
    { // Trang 41
      items: [{
        situation: "A woman is discussing with her group.",
        audioSrc: "", transcript: "",
        question: "How many seats does she need?",
        options: ["12", "15", "20"],
        answer: "20"
      }]
    },
    { // Trang 42
      items: [{
        situation: "Listen to a girl calling the cafe.",
        audioSrc: "", transcript: "",
        question: "What did she forget, and where did she leave it?",
        options: ["On the counter", "In the corner", "Near the door"],
        answer: "In the corner"
      }]
    },
    { // Trang 43
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "Where did they meet?",
        options: ["The front entrance", "The back door", "The lobby"],
        answer: "The front entrance"
      }]
    },
    { // Trang 44
      items: [{
        situation: "A woman is going home after shopping.",
        audioSrc: "", transcript: "",
        question: "What did she buy?",
        options: ["A dress", "A blouse", "A hat"],
        answer: "A dress"
      }]
    },
    { // Trang 45
      items: [{
        situation: "Listen to a teacher talking about meeting preparations.",
        audioSrc: "", transcript: "",
        question: "What is the teacher preparing for the meeting now?",
        options: ["Set up the chairs", "Organize the documents", "Order the food"],
        answer: "Order the food"
      }]
    },
    { // Trang 46
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "When will she need a computer?",
        options: ["Tuesday", "Friday", "Saturday"],
        answer: "Friday"
      }]
    },
    { // Trang 47
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What country will they study next semester?",
        options: ["France", "Spain", "Germany"],
        answer: "France"
      }]
    },
    { // Trang 48
      items: [{
        situation: "A woman is talking about her house.",
        audioSrc: "", transcript: "",
        question: "What is she going to change in their house?",
        options: ["The window", "The car", "The computer"],
        answer: "The window"
      }]
    },
    { // Trang 49
      items: [{
        situation: "Listen to an actor discussing his hobbies.",
        audioSrc: "", transcript: "",
        question: "What does the actor like to do in his free time?",
        options: ["Drawing", "Watching movies", "Playing sports"],
        answer: "Drawing"
      }]
    },
    { // Trang 50
      items: [{
        situation: "Listen to a principal talking about new school facilities.",
        audioSrc: "", transcript: "",
        question: "What new facility will the school have?",
        options: ["A new library", "A sports field", "The performance space"],
        answer: "The performance space"
      }]
    },
    { // Trang 51
      items: [{
        situation: "Listening to a man talking about his business trip.",
        audioSrc: "", transcript: "",
        question: "What does he like in Dubai?",
        options: ["Enjoy the food there", "Enjoy his job there", "Enjoy the people there"],
        answer: "Enjoy his job there"
      }]
    },
    { // Trang 52
      items: [{
        situation: "A finance expert is giving advice to young people.",
        audioSrc: "", transcript: "",
        question: "What shouldn't they do?",
        options: ["Spend too much on clothes", "Ask for more money", "Save for emergencies"],
        answer: "Ask for more money"
      }]
    },
    { // Trang 53
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "Why did the wife come home late?",
        options: ["Heavy traffic", "No car", "Worked late"],
        answer: "No car"
      }]
    },
    { // Trang 54
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What did he feed the cat?",
        options: ["Fish", "Chicken", "Beef"],
        answer: "Fish"
      }]
    },
    { // Trang 55
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What is the phone number?",
        options: ["...456", "...457", "...458"],
        answer: "...457"
      }]
    },
    { // Trang 56
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "How much?",
        options: ["Twenty pounds", "Thirty pounds", "Forty pounds"],
        answer: "Thirty pounds"
      }]
    },
    { // Trang 57
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What's the direction of the supermarket?",
        options: ["The South", "The North", "The East"],
        answer: "The North"
      }]
    },
    { // Trang 58
      items: [{
        situation: "The woman is calling a friend about meeting for dinner.",
        audioSrc: "", transcript: "",
        question: "How long does it take to get to the station?",
        options: ["30 minutes", "40 minutes", "50 minutes"],
        answer: "40 minutes"
      }]
    },
    { // Trang 59
      items: [{
        situation: "A man is talking about the city concert.",
        audioSrc: "", transcript: "",
        question: "How will the concert end?",
        options: ["The city's favorite group", "Fireworks performance", "Singing from orchestra"],
        answer: "The city's favorite group"
      }]
    },
    { // Trang 60
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What did he do in the morning?",
        options: ["Read a book", "Look at the view", "Have breakfast"],
        answer: "Look at the view"
      }]
    },
    { // Trang 61
      items: [{
        situation: "A woman tells her friend about her plans for the day.",
        audioSrc: "", transcript: "",
        question: "What is the woman going to do?",
        options: ["Have coffee", "Have lunch", "Drink tea"],
        answer: "Have coffee"
      }]
    },
    { // Trang 62
      items: [{
        situation: "Listen to the announcement.",
        audioSrc: "", transcript: "",
        question: "When does the train leave?",
        options: ["At 9:15", "At 9:30", "At 9:45"],
        answer: "At 9:15"
      }]
    },
    { // Trang 63
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What time does the man work?",
        options: ["11 o'clock", "12 o'clock", "1 o'clock"],
        answer: "12 o'clock"
      }]
    },
    { // Trang 64
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What did they both buy?",
        options: ["Shirts", "Shoes", "Trousers"],
        answer: "Trousers"
      }]
    },
    { // Trang 65
      items: [{
        situation: "Listen to a woman explaining why he was late.",
        audioSrc: "", transcript: "",
        question: "What is the main reason he gets late?",
        options: ["Overslept", "Forgot something", "Missed the train"],
        answer: "Missed the train"
      }]
    },
    { // Trang 66
      items: [{
        situation: "Two people are talking about meeting for dinner.",
        audioSrc: "", transcript: "",
        question: "What time does Ahmed meet Rose?",
        options: ["Half past seven", "Quarter past seven", "Quarter to eight"],
        answer: "Quarter to eight"
      }]
    },
    { // Trang 67
      items: [{
        situation: "Anna is calling her friend.",
        audioSrc: "", transcript: "",
        question: "Where will they meet?",
        options: ["At the marketplace", "At the mall", "At the park"],
        answer: "At the marketplace"
      }]
    },
    { // Trang 68
      items: [{
        situation: "Stephanie is looking for a job taking care of children.",
        audioSrc: "", transcript: "",
        question: "How old is she?",
        options: ["21", "20", "22"],
        answer: "21"
      }]
    },
    { // Trang 69
      items: [{
        situation: "A man is giving directions to a friend about how to get to the football club.",
        audioSrc: "", transcript: "",
        question: "The football club is near:",
        options: ["A grocery store", "A park", "A library"],
        answer: "A park"
      }]
    },
    { // Trang 70
      items: [{
        situation: "A boy is talking about his cat.",
        audioSrc: "", transcript: "",
        question: "What does he feed the cat?",
        options: ["Mice", "Insects", "Fish"],
        answer: "Fish"
      }]
    },
    { // Trang 71
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "What does this family do most weekends?",
        options: ["Go for a walk", "Go picnic", "Go cycling"],
        answer: "Go cycling"
      }]
    },
    { // Trang 72
      items: [{
        situation: "Jack is phoning his mom.",
        audioSrc: "", transcript: "",
        question: "What does Jack need to buy for his sister?",
        options: ["Chocolates", "Milk", "Fruit"],
        answer: "Chocolates"
      }]
    },
    { // Trang 73
      items: [{
        situation: "Listen to a man talking about their train journey.",
        audioSrc: "", transcript: "",
        question: "What time did it depart?",
        options: ["9:00", "9:30", "10:00"],
        answer: "9:30"
      }]
    },
    { // Trang 74
      items: [{
        situation: "Listen to a weather forecast.",
        audioSrc: "", transcript: "",
        question: "Where will the weather be best?",
        options: ["In the south", "In the west", "In the east"],
        answer: "In the east"
      }]
    },
    { // Trang 75
      items: [{
        situation: "Listen to the conversation.",
        audioSrc: "", transcript: "",
        question: "Why was the museum visit canceled?",
        options: ["Not enough people", "Bad weather", "Renovation"],
        answer: "Not enough people"
      }]
    },
    { // Trang 76
      items: [{
        situation: "A man is calling his friend to meet for coffee.",
        audioSrc: "", transcript: "",
        question: "Where is the Coffee shop located?",
        options: ["Opposite the gift shop", "Next to the gift shop", "Behind the gift shop"],
        answer: "Opposite the gift shop"
      }]
    }
  ],

  // ── LISTENING PART 2 ──────────────────────────────────────────
  // ── LISTENING PART 2 ──────────────────────────────────────────
  listening_p2: [
    { // Trang 1
      situation: "Topic 1: Protecting the Environment (bản 2)",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "Give away used items", "Buy environmentally friendly products", "Reuse containers for storing food", "Not buy commercial cleaning products", "Plant more trees"], answer: "Give away used items" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "Give away used items", "Buy environmentally friendly products", "Reuse containers for storing food", "Not buy commercial cleaning products", "Plant more trees"], answer: "Buy environmentally friendly products" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "Give away used items", "Buy environmentally friendly products", "Reuse containers for storing food", "Not buy commercial cleaning products", "Plant more trees"], answer: "Reuse containers for storing food" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "Give away used items", "Buy environmentally friendly products", "Reuse containers for storing food", "Not buy commercial cleaning products", "Plant more trees"], answer: "Not buy commercial cleaning products" }
      ]
    },
    { // Trang 2
      situation: "Topic 2: Protecting the Environment (2)",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "Using less electricity", "Not driving to work", "Shopping online", "Using less water", "Recycling plastic bags"], answer: "Using less electricity" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "Using less electricity", "Not driving to work", "Shopping online", "Using less water", "Recycling plastic bags"], answer: "Not driving to work" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "Using less electricity", "Not driving to work", "Shopping online", "Using less water", "Recycling plastic bags"], answer: "Shopping online" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "Using less electricity", "Not driving to work", "Shopping online", "Using less water", "Recycling plastic bags"], answer: "Using less water" }
      ]
    },
    { // Trang 3
      situation: "Topic 3: Shopping Habits",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "The products are delivered", "It is cheaper", "Save time", "It has more choices", "Easy to compare prices"], answer: "The products are delivered" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "The products are delivered", "It is cheaper", "Save time", "It has more choices", "Easy to compare prices"], answer: "It is cheaper" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "The products are delivered", "It is cheaper", "Save time", "It has more choices", "Easy to compare prices"], answer: "Save time" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "The products are delivered", "It is cheaper", "Save time", "It has more choices", "Easy to compare prices"], answer: "It has more choices" }
      ]
    },
    { // Trang 4
      situation: "Topic 4: Listening to Music",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "To relax", "While studying", "While singing", "After waking up", "Improve sleep quality"], answer: "To relax" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "To relax", "While studying", "While singing", "After waking up", "Improve sleep quality"], answer: "While studying" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "To relax", "While studying", "While singing", "After waking up", "Improve sleep quality"], answer: "While singing" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "To relax", "While studying", "While singing", "After waking up", "Improve sleep quality"], answer: "After waking up" }
      ]
    },
    { // Trang 5
      situation: "Topic 5: Exercise Preferences",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "Mountain biking", "Going for a run", "Walking", "Horse riding", "Swimming"], answer: "Mountain biking" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "Mountain biking", "Going for a run", "Walking", "Horse riding", "Swimming"], answer: "Going for a run" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "Mountain biking", "Going for a run", "Walking", "Horse riding", "Swimming"], answer: "Walking" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "Mountain biking", "Going for a run", "Walking", "Horse riding", "Swimming"], answer: "Horse riding" }
      ]
    },
    ,{ // Trang 6
      situation: "Topic 6: The Place to Run",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "In the fitness center", "In the street", "At the seaside", "On the running track", "In the park", "In the forest"], answer: "In the street" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "In the fitness center", "In the street", "At the seaside", "On the running track", "In the park", "In the forest"], answer: "At the seaside" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "In the fitness center", "In the street", "At the seaside", "On the running track", "In the park", "In the forest"], answer: "On the running track" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "In the fitness center", "In the street", "At the seaside", "On the running track", "In the park", "In the forest"], answer: "In the fitness center" }
      ]
    },
    { // Trang 7
      situation: "Topic 7: Doing Exercise",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "Have fun exercising with others", "Hate exercising", "Improve work performance", "Find exercise tiring", "Exercise to lose weight", "Exercise for better sleep"], answer: "Improve work performance" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "Have fun exercising with others", "Hate exercising", "Improve work performance", "Find exercise tiring", "Exercise to lose weight", "Exercise for better sleep"], answer: "Find exercise tiring" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "Have fun exercising with others", "Hate exercising", "Improve work performance", "Find exercise tiring", "Exercise to lose weight", "Exercise for better sleep"], answer: "Have fun exercising with others" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "Have fun exercising with others", "Hate exercising", "Improve work performance", "Find exercise tiring", "Exercise to lose weight", "Exercise for better sleep"], answer: "Hate exercising" }
      ]
    },
    { // Trang 8
      situation: "Topic 8: Purposes of Using the Internet",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "Find transport information", "Complete assignments", "Communicate with friends", "Watch films", "Play online games", "Read the news"], answer: "Watch films" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "Find transport information", "Complete assignments", "Communicate with friends", "Watch films", "Play online games", "Read the news"], answer: "Communicate with friends" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "Find transport information", "Complete assignments", "Communicate with friends", "Watch films", "Play online games", "Read the news"], answer: "Complete assignments" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "Find transport information", "Complete assignments", "Communicate with friends", "Watch films", "Play online games", "Read the news"], answer: "Find transport information" }
      ]
    },
    { // Trang 9
      situation: "Topic 9: Art",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "Alone", "As part of the job", "With children", "A social activity", "As a hobby", "In a competition"], answer: "A social activity" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "Alone", "As part of the job", "With children", "A social activity", "As a hobby", "In a competition"], answer: "With children" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "Alone", "As part of the job", "With children", "A social activity", "As a hobby", "In a competition"], answer: "As part of the job" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "Alone", "As part of the job", "With children", "A social activity", "As a hobby", "In a competition"], answer: "Alone" }
      ]
    },
    { // Trang 10
      situation: "Topic 10: Journey to Work",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "Walk alone", "Walk with friends", "Go by bus", "Drive car", "Ride a bicycle", "Take the train"], answer: "Walk with friends" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "Walk alone", "Walk with friends", "Go by bus", "Drive car", "Ride a bicycle", "Take the train"], answer: "Go by bus" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "Walk alone", "Walk with friends", "Go by bus", "Drive car", "Ride a bicycle", "Take the train"], answer: "Walk alone" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "Walk alone", "Walk with friends", "Go by bus", "Drive car", "Ride a bicycle", "Take the train"], answer: "Drive car" }
      ]
    },
    ,{ // Trang 11
      situation: "Topic 11: Studying Habits (1)",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "Late at night", "With music", "At various places", "Quiet place", "Early in the morning", "In the library"], answer: "Late at night" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "Late at night", "With music", "At various places", "Quiet place", "Early in the morning", "In the library"], answer: "At various places" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "Late at night", "With music", "At various places", "Quiet place", "Early in the morning", "In the library"], answer: "With music" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "Late at night", "With music", "At various places", "Quiet place", "Early in the morning", "In the library"], answer: "Quiet place" }
      ]
    },
    { // Trang 12
      situation: "Topic 12: Studying Habits (2)",
      speakers: [
        { label: "A", audioSrc: "", transcript: "" },
        { label: "B", audioSrc: "", transcript: "" },
        { label: "C", audioSrc: "", transcript: "" },
        { label: "D", audioSrc: "", transcript: "" }
      ],
      questions: [
        { q: "Speaker A", options: ["- Chọn câu mô tả -", "On public transport", "At home", "In the coffee shop", "In a park", "At school", "At a friend's house"], answer: "In the coffee shop" },
        { q: "Speaker B", options: ["- Chọn câu mô tả -", "On public transport", "At home", "In the coffee shop", "In a park", "At school", "At a friend's house"], answer: "In a park" },
        { q: "Speaker C", options: ["- Chọn câu mô tả -", "On public transport", "At home", "In the coffee shop", "In a park", "At school", "At a friend's house"], answer: "On public transport" },
        { q: "Speaker D", options: ["- Chọn câu mô tả -", "On public transport", "At home", "In the coffee shop", "In a park", "At school", "At a friend's house"], answer: "At home" }
      ]
    }
  ],

  // ── LISTENING PART 3 ──────────────────────────────────────────
// ── LISTENING PART 3 ──────────────────────────────────────────
  listening_p3: [
    { // Trang 1
      topic: "1. Changes in the workplace (MWBM: Mệt với bố mẹ)",
      situation: "Who expresses which opinion? (Changes in the workplace)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>W:</b> I'm thinking about switching to another job.<br><i>(Tôi đang nghĩ đến việc chuyển sang một công việc khác.)</i><br><br><b>M:</b> Why? Your current job is very stable.<br><i>(Tại sao vậy? Công việc hiện tại của bạn rất ổn định.)</i><br><br><b>W:</b> I think I should try my hand at different fields. The jobs I take should only last around 1-2 years. I don't like staying too long in one job or with one company; that would be really boring. Nowadays, many companies offer temporary jobs, which allows me to try out different fields.<br><i>(Tôi nghĩ mình nên thử sức ở nhiều lĩnh vực khác nhau. Những công việc tôi làm chỉ nên kéo dài khoảng 1-2 năm. Tôi không thích ở lại quá lâu ở một công việc hoặc một công ty; điều đó sẽ thực sự nhàm chán. Ngày nay, nhiều công ty cung cấp các công việc tạm thời, cho phép tôi thử sức ở nhiều lĩnh vực khác nhau.)</i><br><br><b>M:</b> Oh, but if you stay longer at one company, they might offer you more opportunities for career advancement. I always want to stay long-term with a company that suits me.<br><i>(Ồ, nhưng nếu bạn ở lại lâu hơn ở một công ty, họ có thể cung cấp cho bạn nhiều cơ hội thăng tiến trong sự nghiệp hơn. Tôi luôn muốn gắn bó lâu dài với một công ty phù hợp với mình.)</i><br><br><b>W:</b> Nowadays, young people who have just graduated from university are very talented and have many qualifications. I'm afraid that if I stick with one job and don't change to accumulate knowledge in various fields, it will be hard to compete with these young, talented people.<br><i>(Ngày nay, những người trẻ vừa tốt nghiệp đại học rất tài năng và có nhiều bằng cấp. Tôi sợ rằng nếu tôi gắn bó với một công việc và không thay đổi để tích lũy kiến thức ở nhiều lĩnh vực khác nhau, sẽ khó có thể cạnh tranh với những người trẻ tài năng này.)</i><br><br><b>M:</b> We also need to consider job satisfaction. If we do well, we need to be encouraged and motivated. That helps employees feel that their efforts and contributions to the company are worthwhile.<br><i>(Chúng ta cũng cần cân nhắc đến sự hài lòng trong công việc. Nếu chúng ta làm tốt, chúng ta cần được khuyến khích và động viên. Điều đó giúp nhân viên cảm thấy rằng những nỗ lực và đóng góp của họ cho công ty là xứng đáng.)</i><br><br><b>W:</b> You're absolutely right, I couldn't agree more. In this age of technological advancement, many jobs have been replaced by machines. More and more people are losing their jobs due to the development of technology and engineering. I think this is a concerning issue.<br><i>(Bạn hoàn toàn đúng, tôi hoàn toàn đồng ý. Trong thời đại công nghệ tiên tiến này, nhiều công việc đã bị thay thế bằng máy móc. Ngày càng có nhiều người mất việc do sự phát triển của công nghệ và kỹ thuật. Tôi nghĩ đây là một vấn đề đáng lo ngại.)</i><br><br><b>M:</b> I don't think so. Technology is helping us do our work more quickly, easily, and conveniently than ever. If we know how to leverage technology in our jobs, productivity will increase significantly, which in turn helps develop the economy and society.<br><i>(Tôi không nghĩ vậy. Công nghệ đang giúp chúng ta làm việc nhanh hơn, dễ dàng hơn và thuận tiện hơn bao giờ hết. Nếu chúng ta biết cách tận dụng công nghệ trong công việc của mình, năng suất sẽ tăng lên đáng kể, từ đó giúp phát triển nền kinh tế và xã hội.)</i>",
      questions: [
        { stmt: "Continuity is important in the workplace", answer: "Man" },
        { stmt: "Job security can't always be guaranteed", answer: "Woman" },
        { stmt: "Job satisfaction is an important motivator", answer: "Both" },
        { stmt: "Technology is good for the economy", answer: "Man" }
      ]
    },
    { // Trang 2
      topic: "2. The subject of beauty (MWBW: Môi vừa bôi Vaseline)",
      situation: "Who expresses which opinion? (The subject of beauty)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>W:</b> Hi, what are you reading?<br><i>(Xin chào, bạn đang đọc gì vậy?)</i><br><br><b>M:</b> I'm reading an article about the concept of beauty.<br><i>(Tôi đang đọc một bài viết về khái niệm cái đẹp.)</i><br><br><b>W:</b> Oh really, that sounds interesting. Beauty is something that can't be defined because everyone has a different perspective on it, right?<br><i>(Ồ thực sự, nghe có vẻ thú vị. Cái đẹp là thứ không thể định nghĩa được vì mỗi người có một góc nhìn khác nhau về nó, đúng không?)</i><br><br><b>M:</b> Actually, people have quite similar perspectives on beauty. We always prefer beautiful things and are drawn to them.<br><i>(Thực ra, mọi người có quan điểm khá giống nhau về cái đẹp. Chúng ta luôn thích những thứ đẹp đẽ và bị thu hút bởi chúng.)</i><br><br><b>W:</b> Beauty in the past and now is very different. The older generation might see traditional things as beautiful, while the younger generation considers unique and unconventional things as beautiful. So, not everyone has the same view on beauty.<br><i>(Cái đẹp trong quá khứ và hiện tại rất khác nhau. Thế hệ cũ có thể coi những thứ truyền thống là đẹp, trong khi thế hệ trẻ coi những thứ độc đáo và không theo khuôn mẫu là đẹp. Vì vậy, không phải ai cũng có cùng quan điểm về cái đẹp.)</i><br><br><b>M:</b> Beauty can be found in many places we wouldn't expect, or even within something considered ugly, there's always some beauty present. So, nothing in the world is entirely ugly.<br><i>(Cái đẹp có thể tìm thấy ở nhiều nơi mà chúng ta không ngờ tới, hoặc ngay cả trong thứ gì đó được coi là xấu xí, luôn có một số cái đẹp hiện diện. Vì vậy, không có gì trên thế giới này hoàn toàn xấu xí.)</i><br><br><b>W:</b> Exactly. That's why the definition of beauty is constantly changing. In a few decades, people might find things beautiful that we once considered ugly.<br><i>(Chính xác. Đó là lý do tại sao định nghĩa về cái đẹp liên tục thay đổi. Trong một vài thập kỷ nữa, mọi người có thể thấy những thứ mà chúng ta từng coi là xấu xí là đẹp.)</i><br><br><b>M:</b> That's one perspective. Let's wait and see how it changes.<br><i>(Đó là một góc nhìn. Hãy cùng chờ xem nó thay đổi như thế nào.)</i>",
      questions: [
        { stmt: "People share very similar ideas about beauty", answer: "Man" },
        { stmt: "Views of beauty change over time", answer: "Woman" },
        { stmt: "Beauty can be found in unlikely places", answer: "Both" },
        { stmt: "Traditional ideas of beauty are going to change", answer: "Woman" }
      ]
    },
    { // Trang 3
      topic: "3. Audition/actors (MWBB: Mới Vừa Bị Bắt)",
      situation: "Who expresses which opinion? (Audition - Actor)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>W:</b> What do you think about having to cast actors before choosing them?<br><i>(Bạn nghĩ sao về việc phải tuyển diễn viên trước khi chọn họ?)</i><br><br><b>M:</b> I think it's absolutely necessary and the most important thing because it determines whether the actor is suitable for the role or not.<br><i>(Tôi nghĩ điều đó hoàn toàn cần thiết và là điều quan trọng nhất vì nó quyết định diễn viên có phù hợp với vai diễn hay không.)</i><br><br><b>W:</b> I understand that auditions are crucial. But if we only rely on a 15 to 20-minute audition, that short time can't really show us the actor's full capability, especially when they can rely on the script to perform. That way, we can't see the actor's creativity and improvisation skills.<br><i>(Tôi hiểu rằng thử vai rất quan trọng. Nhưng nếu chúng ta chỉ dựa vào buổi thử vai kéo dài 15 đến 20 phút, thì khoảng thời gian ngắn ngủi đó không thể thực sự cho chúng ta thấy hết khả năng của diễn viên, đặc biệt là khi họ có thể dựa vào kịch bản để diễn. Theo cách đó, chúng ta không thể thấy được sự sáng tạo và kỹ năng ứng biến của diễn viên.)</i><br><br><b>M:</b> That's a good point. But actors usually react best with a good script. And they also need a script provided and directed by the director to perform accordingly. It's not always possible for actors to perform freestyle.<br><i>(Đó là một điểm tốt. Nhưng diễn viên thường phản ứng tốt nhất với một kịch bản hay. Và họ cũng cần một kịch bản do đạo diễn cung cấp và chỉ đạo để diễn xuất theo đúng kịch bản. Diễn viên không phải lúc nào cũng có thể diễn tự do.)</i><br><br><b>W:</b> What do you think about theater actors transitioning to film acting?<br><i>(Bạn nghĩ sao về việc diễn viên sân khấu chuyển sang diễn xuất phim?)</i><br><br><b>M:</b> I think these are two completely different fields. When I was in university studying acting, theater acting and film acting were two entirely separate subjects. They require different skills and qualities from the actor. So, it's not easy to go from theater to film acting, and vice versa.<br><i>(Tôi nghĩ đây là hai lĩnh vực hoàn toàn khác nhau. Khi tôi học diễn xuất ở trường đại học, diễn xuất sân khấu và diễn xuất phim là hai môn hoàn toàn riêng biệt. Chúng đòi hỏi những kỹ năng và phẩm chất khác nhau từ diễn viên. Vậy nên, không dễ để chuyển từ diễn xuất sân khấu sang diễn xuất phim và ngược lại.)</i><br><br><b>W:</b> That's exactly right. These are two very different forms of acting, and they demand different skills from actors. However, as actors, I think we all need encouragement and support from the audience.<br><i>(Đúng vậy. Đây là hai hình thức diễn xuất rất khác nhau và chúng đòi hỏi những kỹ năng khác nhau từ diễn viên. Tuy nhiên, với tư cách là diễn viên, tôi nghĩ tất cả chúng ta đều cần sự động viên và hỗ trợ từ khán giả.)</i><br><br><b>M:</b> I couldn't agree more. Actors need praise and feedback to feel recognized for their efforts and contributions.<br><i>(Tôi hoàn toàn đồng ý. Diễn viên cần được khen ngợi và phản hồi để cảm thấy được công nhận cho những nỗ lực và đóng góp của họ.)</i>",
      questions: [
        { stmt: "Auditions are most important for an actor's career", answer: "Man" },
        { stmt: "Actors tend to respond best to strong and engaging scripts", answer: "Woman" },
        { stmt: "Theater acting and screen acting are quite different from each other", answer: "Both" },
        { stmt: "Actors should be praised and recognized as much as possible", answer: "Both" }
      ]
    },
    { // Trang 4
      topic: "4. Information and technology (MWWB: Mà Vẫn Vô Bổ)",
      situation: "Who expresses which opinion? (Information and technology)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>M:</b> Hi, what have you been studying lately?<br><i>(Chào, dạo này bạn học gì?)</i><br><br><b>W:</b> Oh, I'm still studying technology and information systems. It's a really hot topic these days.<br><i>(Ồ, tôi vẫn đang học công nghệ và hệ thống thông tin, đây là chủ đề thực sự nóng hổi hiện nay.)</i><br><br><b>M:</b> That's a fascinating field. I still can't imagine the future of humanity alongside technology. I think within the next hundred years, humans won't be able to keep up with the pace of information technology development.<br><i>(Đó là một lĩnh vực hấp dẫn. Tôi vẫn chưa thể tưởng tượng được tương lai của nhân loại bên cạnh công nghệ. Tôi nghĩ rằng trong vòng một trăm năm tới, con người sẽ không thể theo kịp tốc độ phát triển của công nghệ thông tin.)</i><br><br><b>W:</b> I believe that the younger generation and future generations will become increasingly smarter, and they'll discover even more amazing things about information technology to benefit society.<br><i>(Tôi tin rằng thế hệ trẻ và các thế hệ tương lai sẽ ngày càng thông minh hơn và họ sẽ khám phá ra nhiều điều tuyệt vời hơn nữa về công nghệ thông tin để mang lại lợi ích cho xã hội.)</i><br><br><b>M:</b> But if technology advances too quickly and becomes too sophisticated, won't that cause a lot of people to lose their jobs? Many industries could be replaced by machines and robots. In the future, machines might even be smarter than humans.<br><i>(Nhưng nếu công nghệ tiến bộ quá nhanh và trở nên quá tinh vi, điều đó không phải sẽ khiến nhiều người mất việc sao? Nhiều ngành công nghiệp có thể bị thay thế bởi máy móc và rô bốt. Trong tương lai, máy móc thậm chí có thể thông minh hơn con người.)</i><br><br><b>W:</b> I think machines are just there to support humans in their work; they can't replace us or be smarter than us. If machines and robots are involved in the work process, they will make our jobs less strenuous and improve efficiency. This, in turn, will drive continuous economic and social development alongside technological advancements.<br><i>(Tôi nghĩ máy móc chỉ ở đó để hỗ trợ con người trong công việc; chúng không thể thay thế chúng ta hoặc thông minh hơn chúng ta. Nếu máy móc và rô-bốt tham gia vào quy trình làm việc, chúng sẽ giúp công việc của chúng ta bớt căng thẳng hơn và nâng cao hiệu quả. Đổi lại, điều này sẽ thúc đẩy sự phát triển kinh tế và xã hội liên tục cùng với những tiến bộ công nghệ.)</i><br><br><b>M:</b> What about the issue of personal data breaches? We should have more policies to protect personal information and prevent machines from leaking important personal data.<br><i>(Còn vấn đề vi phạm dữ liệu cá nhân thì sao? Chúng ta nên có nhiều chính sách hơn để bảo vệ thông tin cá nhân và ngăn chặn máy móc làm rò rỉ dữ liệu cá nhân quan trọng.)</i><br><br><b>W:</b> I agree with you. A major issue with information technology is the potential for data breaches. If we can improve this, it would be fantastic.<br><i>(Tôi đồng ý với bạn. Một vấn đề lớn với công nghệ thông tin là khả năng vi phạm dữ liệu. Nếu chúng ta có thể cải thiện điều này, thì thật tuyệt vời.)</i>",
      questions: [
        { stmt: "The future generation will fail to cope with new information", answer: "Man" },
        { stmt: "The information revolution will be good for the economy", answer: "Woman" },
        { stmt: "No computer is superior to the human brain", answer: "Woman" },
        { stmt: "More should be done to protect individual privacy", answer: "Both" }
      ]
    },
    { // Trang 5
      topic: "5. The Internet (BWWB: Bé Vui Với Bố)",
      situation: "Who expresses which opinion? (The Internet)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>W:</b> These days, there's so much information on the internet that I feel overwhelmed.<br><i>(Ngày nay, có quá nhiều thông tin trên Internet khiến tôi cảm thấy choáng ngợp.)</i><br><br><b>M:</b> That's true. A lot of people feel the same way, especially with the mix of real and fake information. Sometimes we end up reading fake news.<br><i>(Đúng vậy. Nhiều người cũng cảm thấy như vậy, đặc biệt là khi có sự pha trộn giữa thông tin thật và giả. Đôi khi chúng ta đọc phải tin tức giả.)</i><br><br><b>W:</b> That's why using the internet requires both knowledge and skills. Without good information searching skills, we can waste a lot of time. There's so much content uploaded to the internet every day, and we have to be cautious because it might not be accurate. As a result, people are gradually changing how they perceive the information they encounter online. It's not like in the past when we read newspapers and believed everything was true.<br><i>(Đó là lý do tại sao việc sử dụng Internet đòi hỏi cả kiến thức và kỹ năng. Nếu không có kỹ năng tìm kiếm thông tin tốt, chúng ta có thể lãng phí rất nhiều thời gian. Có rất nhiều nội dung được tải lên Internet mỗi ngày và chúng ta phải thận trọng vì chúng có thể không chính xác. Do đó, mọi người đang dần thay đổi cách họ nhìn nhận thông tin mà họ gặp phải trực tuyến. Không giống như trước đây khi chúng ta đọc báo và tin rằng mọi thứ đều đúng.)</i><br><br><b>M:</b> Additionally, the internet has made people much more impatient than before. They want everything to yield quick results. People are losing the ability to wait for outcomes like they used to.<br><i>(Ngoài ra, Internet khiến mọi người trở nên thiếu kiên nhẫn hơn nhiều so với trước đây. Họ muốn mọi thứ phải mang lại kết quả nhanh chóng. Mọi người đang mất khả năng chờ đợi kết quả như trước đây.)</i><br><br><b>W:</b> Exactly, because the internet allows us to find millions of results in less than a second. We're getting used to that, which is leading to a decline in patience and tolerance.<br><i>(Chính xác, vì Internet cho phép chúng ta tìm thấy hàng triệu kết quả trong chưa đầy một giây. Chúng ta đang quen với điều đó, điều này dẫn đến sự suy giảm tính kiên nhẫn và khả năng chịu đựng.)</i>",
      questions: [
        { stmt: "There is too much information on the internet", answer: "Both" },
        { stmt: "Using internet requires skills", answer: "Woman" },
        { stmt: "The internet is changing the way we think", answer: "Woman" },
        { stmt: "Internet has made people less patient", answer: "Both" }
      ]
    },
    { // Trang 6
      topic: "6. Arts (WMBM: Vào mỗi Bình minh)",
      situation: "Who expresses which opinion? (Arts)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>W:</b> What magazine are you reading?<br><i>(Bạn đang đọc tạp chí nào vậy?)</i><br><br><b>M:</b> I'm reading about art.<br><i>(Tôi đang đọc về nghệ thuật.)</i><br><br><b>W:</b> That sounds interesting. I think art is only for the wealthy. Poor people don't have the opportunity or time to enjoy art.<br><i>(Nghe có vẻ thú vị. Tôi nghĩ nghệ thuật chỉ dành cho người giàu. Người nghèo không có cơ hội hoặc thời gian để thưởng thức nghệ thuật.)</i><br><br><b>M:</b> Actually, art isn't limited to any one group. If we have an interest, we can access art because it's all around us.<br><i>(Thực ra, nghệ thuật không chỉ giới hạn ở một nhóm người nào. Nếu chúng ta có hứng thú, chúng ta có thể tiếp cận nghệ thuật vì nghệ thuật ở khắp mọi nơi xung quanh chúng ta.)</i><br><br><b>W:</b> I wish that when I was a child and in school, I had more exposure to the arts. I'm really glad that now, when my child goes to school, they can have more exposure to the arts.<br><i>(Tôi ước rằng khi còn nhỏ và đi học, tôi được tiếp xúc nhiều hơn với nghệ thuật. Tôi thực sự vui mừng vì bây giờ, khi con tôi đi học, chúng có thể tiếp xúc nhiều hơn với nghệ thuật.)</i><br><br><b>M:</b> Yes, that's great news. I hope that the authorities and the government will invest more in the arts and make them accessible to everyone, especially by adding more art classes in schools so that students can be exposed to art early on.<br><i>(Vâng, đó là tin tuyệt vời. Tôi hy vọng rằng chính quyền và chính phủ sẽ đầu tư nhiều hơn vào nghệ thuật và giúp mọi người có thể tiếp cận nghệ thuật, đặc biệt là bằng cách thêm nhiều lớp học nghệ thuật hơn vào trường học để học sinh có thể tiếp xúc với nghệ thuật ngay từ sớm.)</i><br><br><b>W:</b> I agree. Children should be introduced to the arts early so they can develop their own sense of beauty sooner.<br><i>(Tôi đồng ý. Trẻ em nên được tiếp xúc với nghệ thuật sớm để chúng có thể phát triển khiếu thẩm mỹ của riêng mình sớm hơn.)</i><br><br><b>M:</b> I think with the development of technology, where we just scroll a bit and see art videos and images flooding social media, art is becoming more accessible than ever.<br><i>(Tôi nghĩ với sự phát triển của công nghệ, khi chúng ta chỉ cần lướt một chút là thấy video và hình ảnh nghệ thuật tràn ngập trên mạng xã hội, nghệ thuật đang trở nên dễ tiếp cận hơn bao giờ hết.)</i><br><br><b>W:</b> Really? Let's wait and see how it unfolds..<br><i>(Thật vậy sao? Chúng ta hãy chờ xem mọi chuyện diễn ra như thế nào..)</i>",
      questions: [
        { stmt: "Art is only suitable for the privileged few", answer: "Woman" },
        { stmt: "The government should invest more in arts", answer: "Man" },
        { stmt: "Children should be exposed to art early", answer: "Both" },
        { stmt: "In the future, art will become more accessible", answer: "Man" }
      ]
    },
    { // Trang 7
      topic: "7. Music and singers (WBMB: Quen Bạn Miền Bắc)",
      situation: "Who expresses which opinion? (Music)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>M:</b> Did you hear about the concert last night? A lot of young people attended.<br><i>(Bạn có nghe về buổi hòa nhạc tối qua không? Rất nhiều người trẻ đã tham dự.)</i><br><br><b>W:</b> Yes, I know about that concert; it was very popular. I don't understand why so many young people are so eager to attend. They're blindly idolizing young singers, and these idols don't really teach them anything good.<br><i>(Vâng, tôi biết về buổi hòa nhạc đó; nó rất nổi tiếng. Tôi không hiểu tại sao nhiều người trẻ lại háo hức tham dự đến vậy. Họ đang mù quáng thần tượng những ca sĩ trẻ, và những thần tượng này thực sự không dạy cho họ bất cứ điều gì tốt đẹp.)</i><br><br><b>M:</b> I see it differently. The young singers today are very talented, and they do a lot of charitable work for society. I think young people look up to them and follow their example.<br><i>(Tôi thấy khác. Những ca sĩ trẻ ngày nay rất tài năng và họ làm rất nhiều công tác từ thiện cho xã hội. Tôi nghĩ những người trẻ ngưỡng mộ họ và noi gương họ.)</i><br><br><b>W:</b> Yes, they volunteer a lot, but they do it for the wrong reasons. They only want to boost their own fame.<br><i>(Vâng, họ làm tình nguyện rất nhiều, nhưng họ làm vì những lý do sai trái. Họ chỉ muốn nâng cao danh tiếng của chính mình.)</i><br><br><b>M:</b> Oh, I think you don't like young singers because you don't enjoy their music, right?<br><i>(Ồ, tôi nghĩ bạn không thích những ca sĩ trẻ vì bạn không thích âm nhạc của họ, đúng không?)</i><br><br><b>W:</b> Exactly, I only like listening to classical music from previous generations. I think music preferences are very personal.<br><i>(Chính xác, tôi chỉ thích nghe nhạc cổ điển của các thế hệ trước. Tôi nghĩ sở thích âm nhạc là rất riêng tư.)</i><br><br><b>M:</b> That's true; each generation has its own unique taste in music. But music is always a universal language that conveys emotions everyone can understand.<br><i>(Đúng vậy; mỗi thế hệ có sở thích âm nhạc riêng. Nhưng âm nhạc luôn là ngôn ngữ chung truyền tải cảm xúc mà mọi người đều có thể hiểu được.)</i><br><br><b>W:</b> I didn't study music like you, so I don't really have any ideas about this.<br><i>(Tôi không học nhạc như bạn, nên tôi không thực sự có ý tưởng nào về điều này.)</i><br><br><b>M:</b> You don't need to study music to understand it. Just think about why you cry during a sad movie scene when the music plays or why you feel energized when you hear a happy song. Isn't that right?<br><i>(Bạn không cần phải học nhạc để hiểu nó. Chỉ cần nghĩ về lý do tại sao bạn khóc trong một cảnh phim buồn khi nhạc phát hoặc tại sao bạn cảm thấy tràn đầy năng lượng khi nghe một bài hát vui vẻ. Đúng không?)</i><br><br><b>W:</b> Yes, I think that's why films always try to include at least one piece of music.<br><i>(Vâng, tôi nghĩ đó là lý do tại sao các bộ phim luôn cố gắng đưa vào ít nhất một bản nhạc.)</i>",
      questions: [
        { stmt: "Singers play a good role for young people", answer: "Man" },
        { stmt: "Taste in music is a highly personal thing", answer: "Both" },
        { stmt: "Music is a universal language", answer: "Man" },
        { stmt: "Music can manipulate people's feelings", answer: "Both" }
      ]
    },
    { // Trang 8
      topic: "8. University and technology (BWMW: Biết Về Mọi Việc)",
      situation: "Who expresses which opinion? (University and technology)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>M:</b> What course are you taking these days?<br><i>(Dạo này bạn đang học khóa nào?)</i><br><br><b>W:</b> I'm currently pursuing an online university degree. It's really suitable and convenient because I can study while working. Technology has truly made education much more accessible.<br><i>(Hiện tại tôi đang theo học chương trình đại học trực tuyến. Thật sự phù hợp và tiện lợi vì tôi có thể vừa học vừa làm. Công nghệ thực sự đã giúp giáo dục dễ tiếp cận hơn nhiều.)</i><br><br><b>M:</b> That's amazing. I still remember the old days when you had to stand in long lines to borrow a book from the library, which took a lot of time. And by the time it was your turn, the book was often already gone. Now, when we want to read a book, we just type the title online and have it immediately.<br><i>(Thật tuyệt vời. Tôi vẫn nhớ ngày xưa, bạn phải xếp hàng dài để mượn sách từ thư viện, mất rất nhiều thời gian. Và đến lượt bạn, cuốn sách thường đã hết. Bây giờ, khi chúng ta muốn đọc một cuốn sách, chúng ta chỉ cần nhập tiêu đề trực tuyến là có ngay.)</i><br><br><b>W:</b> Exactly, study materials were really scarce back then, unlike now.<br><i>(Đúng vậy, tài liệu học tập thực sự khan hiếm vào thời điểm đó, không giống như bây giờ.)</i><br><br><b>M:</b> That's why I'm thinking, why not make all school classes online? It would save a lot of costs.<br><i>(Đó là lý do tại sao tôi nghĩ, tại sao không chuyển tất cả các lớp học ở trường thành trực tuyến? Như vậy sẽ tiết kiệm được rất nhiều chi phí.)</i><br><br><b>W:</b> I think attending school in person is still very necessary because meeting friends and socializing helps us gain more soft skills.<br><i>(Tôi nghĩ rằng việc đến trường trực tiếp vẫn rất cần thiết vì gặp gỡ bạn bè và giao lưu giúp chúng ta có thêm nhiều kỹ năng mềm.)</i><br><br><b>M:</b> Don't forget that young people do have a reputation for being less social. They often prefer talking on social media rather than meeting in person.<br><i>(Đừng quên rằng những người trẻ tuổi có tiếng là ít giao lưu. Họ thường thích nói chuyện trên mạng xã hội hơn là gặp mặt trực tiếp.)</i><br><br><b>W:</b> Additionally, I think the variety of courses available nowadays is also a good way to improve education.<br><i>(Ngoài ra, tôi nghĩ rằng sự đa dạng của các khóa học hiện nay cũng là một cách tốt để cải thiện giáo dục.)</i><br><br><b>M:</b> I don't think so. Offering too many diverse courses can make traditional and core subjects seem less important and neglected.<br><i>(Tôi không nghĩ vậy. Việc cung cấp quá nhiều khóa học đa dạng có thể khiến các môn học truyền thống và cốt lõi có vẻ kém quan trọng và bị bỏ quên.)</i><br><br><b>W:</b> We should also consider competition among universities. It's essential for universities to continuously improve their programs and attract more funding, especially with the current trend of universities seeking financial autonomy.<br><i>(Chúng ta cũng nên cân nhắc đến sự cạnh tranh giữa các trường đại học. Điều cần thiết là các trường đại học phải liên tục cải thiện chương trình của mình và thu hút thêm nguồn tài trợ, đặc biệt là với xu hướng hiện nay là các trường đại học đang tìm kiếm sự tự chủ về tài chính.)</i><br><br><b>M:</b> I don't think we should turn education into a race like competing businesses. If universities need funding, they can report it to the government and educational organizations.<br><i>(Tôi không nghĩ rằng chúng ta nên biến giáo dục thành một cuộc đua như các doanh nghiệp cạnh tranh. Nếu các trường đại học cần tài trợ, họ có thể báo cáo với chính phủ và các tổ chức giáo dục.)</i>",
      questions: [
        { stmt: "Technology helps make education more accessible", answer: "Both" },
        { stmt: "Social interaction is important", answer: "Woman" },
        { stmt: "The diverse curriculum is not an advantage", answer: "Man" },
        { stmt: "University competition should be encouraged", answer: "Woman" }
      ]
    },
    { // Trang 9
      topic: "9. Politics (BMWB: Mua Wuả Bầu)",
      situation: "Who expresses which opinion? (Politics)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>M:</b> Have you heard about the upcoming presidential election? A lot of young people have already voted, which shows that they're becoming more interested in politics.<br><i>(Bạn đã nghe về cuộc bầu cử tổng thống sắp tới chưa? Rất nhiều người trẻ đã đi bỏ phiếu, điều đó cho thấy họ đang ngày càng quan tâm đến chính trị.)</i><br><br><b>W:</b> Yes, it's very different from our time. When I was 18, I never paid attention to politics.<br><i>(Đúng vậy, thời đại này rất khác so với thời đại của chúng ta. Khi tôi 18 tuổi, tôi chưa bao giờ quan tâm đến chính trị.)</i><br><br><b>M:</b> The technology era now gives us so many ways to engage with politics. Politicians often post their political activities on social media much more than they did in the past.<br><i>(Thời đại công nghệ hiện nay mang đến cho chúng ta rất nhiều cách để tham gia vào chính trị. Các chính trị gia thường đăng các hoạt động chính trị của họ trên mạng xã hội nhiều hơn so với trước đây.)</i><br><br><b>W:</b> Actually, politicians still carry out traditional political activities too. They still hand out flyers and participate in volunteer work.<br><i>(Thực ra, các chính trị gia vẫn thực hiện các hoạt động chính trị truyền thống. Họ vẫn phát tờ rơi và tham gia công tác tình nguyện.)</i><br><br><b>M:</b> The development of information technology also overwhelms us with information. There's so much news online that we don't know what to read. This makes keeping up with political news much more challenging than before.<br><i>(Sự phát triển của công nghệ thông tin cũng khiến chúng ta choáng ngợp với thông tin. Có quá nhiều tin tức trực tuyến đến nỗi chúng ta không biết nên đọc gì. Điều này khiến việc theo kịp tin tức chính trị trở nên khó khăn hơn nhiều so với trước đây.)</i><br><br><b>W:</b> I think that as technology advances, it becomes easier for us to stay updated on the news. Technology allows us to use advanced filters to easily sort out the news we need to know.<br><i>(Tôi nghĩ rằng khi công nghệ phát triển, chúng ta có thể dễ dàng cập nhật tin tức hơn. Công nghệ cho phép chúng ta sử dụng các bộ lọc nâng cao để dễ dàng phân loại các tin tức mà chúng ta cần biết.)</i><br><br><b>M:</b> There are also more women involved in politics now than before. It seems society has become more open to women.<br><i>(Hiện nay cũng có nhiều phụ nữ tham gia chính trị hơn trước. Có vẻ như xã hội đã cởi mở hơn với phụ nữ.)</i><br><br><b>W:</b> Exactly. Women have the same education and learning abilities as men. They even lead in many areas of life. In the future, more and more women will be participating in political activities.<br><i>(Chính xác. Phụ nữ có trình độ học vấn và khả năng học tập giống như nam giới. Họ thậm chí còn lãnh đạo trong nhiều lĩnh vực của cuộc sống. Trong tương lai, ngày càng có nhiều phụ nữ tham gia vào các hoạt động chính trị.)</i>",
      questions: [
        { stmt: "Young people are becoming more interested in politics", answer: "Both" },
        { stmt: "Social media has changed political activism", answer: "Man" },
        { stmt: "People are better informed about political issues", answer: "Woman" },
        { stmt: "More women are likely to participate in politics", answer: "Both" }
      ]
    },
    { // Trang 10
      topic: "10. Urban farming (WBMB: Wúy Bạn Miền Biển)",
      situation: "Who expresses which opinion? (Urban farming)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<b>M:</b> The government is discussing adding more farming space to big cities. What do you think about this?<br><i>(Chính phủ đang thảo luận về việc tăng thêm không gian canh tác tại các thành phố lớn. Bạn nghĩ sao về điều này?)</i><br><br><b>W:</b> I think it's a bad idea. Cities are already too crowded, and people don't even have enough land for housing. How can we take land for farming and raising livestock?<br><i>(Tôi nghĩ đó là một ý tưởng tồi. Các thành phố đã quá đông đúc, và mọi người thậm chí còn không có đủ đất để làm nhà. Làm sao chúng ta có thể lấy đất để canh tác và chăn nuôi?)</i><br><br><b>M:</b> We could use spaces like balconies or parks for farming. These farming areas would make the city more beautiful and a better place to live. Plus, it would benefit the local economy since the city could become more self-sufficient in food production without relying on imports from other regions.<br><i>(Chúng ta có thể sử dụng các không gian như ban công hoặc công viên để canh tác. Những khu vực canh tác này sẽ làm cho thành phố đẹp hơn và trở thành nơi đáng sống hơn. Thêm vào đó, nó sẽ có lợi cho nền kinh tế địa phương vì thành phố có thể tự cung tự cấp hơn về sản xuất lương thực mà không phải phụ thuộc vào hàng nhập khẩu từ các khu vực khác.)</i><br><br><b>W:</b> I agree that farming areas would make the landscape greener and more attractive. But adding farming space won't significantly boost the local economy. Farmers have been transporting food into cities for a long time, and we've never had issues with food supply or shortages.<br><i>(Tôi đồng ý rằng các khu vực canh tác sẽ làm cho cảnh quan xanh hơn và hấp dẫn hơn. Nhưng việc tăng thêm không gian canh tác sẽ không thúc đẩy đáng kể nền kinh tế địa phương. Nông dân đã vận chuyển thực phẩm vào các thành phố trong một thời gian dài và chúng tôi chưa bao giờ gặp vấn đề về nguồn cung cấp thực phẩm hoặc tình trạng thiếu hụt thực phẩm.)</i><br><br><b>M:</b> You make a good point. With limited farming space, it wouldn't be enough to meet the food demands of city residents. We would still rely on food supplies from suburban areas.<br><i>(Bạn nói đúng. Với không gian canh tác hạn chế, sẽ không đủ để đáp ứng nhu cầu lương thực của cư dân thành phố. Chúng ta vẫn sẽ dựa vào nguồn cung cấp thực phẩm từ các vùng ngoại ô.)</i><br><br><b>W:</b> Exactly. A few small farming spaces won't fulfill the food demand, but they would take up a lot of valuable land that could be used for housing.<br><i>(Chính xác. Một vài không gian canh tác nhỏ sẽ không đáp ứng được nhu cầu thực phẩm, nhưng chúng sẽ chiếm rất nhiều đất có giá trị có thể được sử dụng làm nhà ở.)</i>",
      questions: [
        { stmt: "Living space is more important than farming space", answer: "Woman" },
        { stmt: "Urban farming sites can be visually appealing", answer: "Both" },
        { stmt: "Urban farming can benefit local economics", answer: "Man" },
        { stmt: "Urban farming cannot meet food needs", answer: "Both" }
      ]
    },
    { // Trang 11
      topic: "11. Local cultural center (MBWW: Muốn bảo vệ vượn)",
      situation: "Who expresses which opinion? (Local cultural center)",
      audioSrc: "",
      speakers_in_audio: ["Man", "Woman", "Both"],
      pageTranscript: "<i>(Hiện tại chưa có dữ liệu bài hội thoại cho câu này)</i>",
      questions: [
        { stmt: "The exhibition should be different", answer: "Man" },
        { stmt: "The traditions are losing significance", answer: "Both" },
        { stmt: "The local festival will disappear soon", answer: "Woman" },
        { stmt: "Schools are important", answer: "Woman" }
      ]
    }
  ],


    // ── LISTENING PART 4 ──────────────────────────────────────────
  listening_p4: [
    { // Trang 1
      situation: "A critic talks about a New series",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Lời chỉ trích nào được đề cập về cách kể chuyện của series?</b><br>-> Bối cảnh của các nhân vật không được khai thác đầy đủ.<br><br><b>Câu 2: Vấn đề nào được nhấn mạnh về kịch bản của series?</b><br>-> Nhiều kịch bản thiếu đi những ý tưởng gốc.",
      questions: [
        { q: "What is one criticism mentioned regarding the series' storytelling?", options: ["The dialogues is difficult to follow", "The characters backgrounds are not adequately explored", "The pilot is overly complicated"], answer: "The characters backgrounds are not adequately explored" },
        { q: "What issue is highlighted about the series' writing?", options: ["The overall pacing is a bit too slow.", "The humor is poorly executed.", "Many scripts are lacking original ideas."], answer: "Many scripts are lacking original ideas." }
      ]
    },
    { // Trang 2
      situation: "Sports competitions",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Ý kiến của chuyên gia về các cuộc thi thể thao là gì?</b><br>-> Chúng có tác động có hại.<br><br><b>Câu 2: Lời khuyên của chuyên gia dành cho các trường học là gì?</b><br>-> Cung cấp cho học sinh sự cân bằng trong cuộc sống.",
      questions: [
        { q: "What is the expert's opinion about sports competitions?", options: ["They have a harmful effect", "Nature potential sportsmen for the country.", "Provide school with external investments"], answer: "They have a harmful effect" },
        { q: "What is the expert's advice for schools?", options: ["Provides them with a balance in their lives.", "Should consider sports as a mandatory subject.", "Keep students focus on academic subjects"], answer: "Provides them with a balance in their lives." }
      ]
    },
    { // Trang 3
      situation: "A newly released novel",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Người phát thanh viên nói gì về cuốn tiểu thuyết mới?</b><br>-> Nó khá khác biệt so với các tác phẩm trước đây của ông ấy.<br><br><b>Câu 2: Người phát thanh viên nói nhà văn nên làm gì trong tương lai?</b><br>-> Ông ấy nên lắng nghe các nhà phê bình trước khi viết tác phẩm tiếp theo.",
      questions: [
        { q: "What does the announcer say about the new novel?", options: ["It is quite different compared to his previous works", "It is less famous than his earlier work", "It is romantic and soft"], answer: "It is quite different compared to his previous works" },
        { q: "What does the announcer say the writer should do in the future?", options: ["The writer should go back to his original genre", "The writer should continue to write this genre", "He should listen to critics before writing his next work"], answer: "He should listen to critics before writing his next work" }
      ]
    },
    { // Trang 4
      situation: "Two big writers of history, which are Shakespares William and Louis Michael.",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Ý kiến của giảng viên về các tác phẩm trong quá khứ của cả hai tác giả là gì?</b><br>-> Cả hai đều bị giới học thuật bỏ qua.<br><br><b>Câu 2: Giảng viên đã nói gì về cả hai tác giả?</b><br>-> Ý nghĩa tác phẩm của họ không phải lúc nào cũng dễ dàng nhận ra.",
      questions: [
        { q: "What was the lecturer's opinion about both authors' past work?", options: ["One was less successful than the other.", "They have both been overlooked by academics", "They both makes references to each other in their work"], answer: "They have both been overlooked by academics" },
        { q: "What did the lecturer say about both authors?", options: ["The meaning of their work is not always easily identified", "Their reputation goes beyond their target audience.", "They should have been more popular."], answer: "The meaning of their work is not always easily identified" }
      ]
    },
    { // Trang 5
      situation: "A musician's career and latest albums.",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Nhạc sĩ đã quyết định điều gì về sự nghiệp ca hát của mình?</b><br>-> Anh ấy sẽ giải nghệ ca hát chuyên nghiệp.<br><br><b>Câu 2: Nhạc sĩ có thể đạt được điều gì với những album gần đây của mình?</b><br>-> Anh ấy có thể đã thành công hơn.",
      questions: [
        { q: "What has the musician decided regarding his singing career?", options: ["He will inform fans about new albums", "He will retire from singing professionally", "He will make a comeback after a long break"], answer: "He will retire from singing professionally" },
        { q: "What could the musician have achieved with his recent albums?", options: ["He could have gotten a bigger fan base", "He could have inspired future generations in general.", "He could have been more successful"], answer: "He could have been more successful" }
      ]
    },
    { // Trang 6
      situation: "Topic: Criticism of the new novel",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: 17.1 Điều gì thu hút độc giả đến với cuốn tiểu thuyết này?</b><br>-> Các nhân vật rất thú vị.<br><br><b>Câu 2: 17.2 Ý kiến của người nói về cuốn tiểu thuyết này là gì?</b><br>-> Nó sẽ tạo dựng nên sự nổi tiếng cho tác giả.",
      questions: [
        { q: "17.1 What attracts readers to this novel?", options: ["The book includes detailed historical facts", "The chapters are very short and easy to read", "The characters were interesting"], answer: "The characters were interesting" },
        { q: "17.2 What is the speaker's opinion about this novel?", options: ["It needs major editing before publication", "It will establish the author's popularity", "It's unlikely to appeal to international readers"], answer: "It will establish the author's popularity" }
      ]
    },
    { // Trang 7
      situation: "A break from studying/gap year",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1:</b><br>-> Cách để trở nên tự lập hơn.<br><br><b>Câu 2:</b><br>-> Anh ấy chưa sẵn sàng để bắt đầu giáo dục đại học.",
      questions: [
        { q: "ý 1", options: ["How to be more independent", "competition for job is intense", "Finding a stable job after graduation is often very difficult."], answer: "How to be more independent" },
        { q: "ý 2", options: ["He doesn't want to study MBA", "He was not prepared to find a job.", "He was not ready to start higher education"], answer: "He was not ready to start higher education" }
      ]
    },
    { // Trang 8
      situation: "Television series",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1:</b><br>-> Nó có chất lượng nhất quán từ đầu đến cuối.<br><br><b>Câu 2:</b><br>-> Thói quen của người xem ảnh hưởng đến cách mà các series được tạo ra.",
      questions: [
        { q: "ý 1", options: ["It has a consistent quality throughout", "watching TV a lot damages your eyes", "This TV program teaches useful lessons."], answer: "It has a consistent quality throughout" },
        { q: "ý 2", options: ["TV programs are diverse from regions", "Viewers habits influence the way that series are made", "This TV program is very interesting"], answer: "Viewers habits influence the way that series are made" }
      ]
    },
    { // Trang 9
      situation: "The important of sleep",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Điều quan trọng nhất để giúp ngủ ngon là:</b><br>-> Ngăn chặn tiếng ồn và ánh sáng là chìa khóa.<br><br><b>Câu 2: Theo chuyên gia, thái độ của công chúng đối với giấc ngủ là gì?</b><br>-> Mọi người không phải lúc nào cũng nhận ra các triệu chứng của sự mệt mỏi.",
      questions: [
        { q: "The most important thing to help sleep well is:", options: ["Resting sufficiently is necessary", "Beds are best for sleeping", "Blocking noise and light is the key"], answer: "Blocking noise and light is the key" },
        { q: "According to the expert, what is the public attitude towards sleeping?", options: ["Sleeping quality has deteriorated over time.", "People can't always recognize the symptoms of tiredness", "The young generation tends to have unhealthy sleeping habits."], answer: "People can't always recognize the symptoms of tiredness" }
      ]
    },
    { // Trang 10
      situation: "Goals setting",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Người nói nói gì về các mục tiêu ngắn hạn?</b><br>-> Nó cho phép bạn linh hoạt hơn.<br><br><b>Câu 2: Ý kiến của người nói về việc đặt mục tiêu là gì?</b><br>-> Nó có thể ngăn bạn mắc sai lầm.",
      questions: [
        { q: "What does the speaker say about short-term goals?", options: ["It allows you to be more flexible", "It only apply to specific situations or certain types of people", "It creates pressure and limits creativity"], answer: "It allows you to be more flexible" },
        { q: "What is the speaker's opinion about goal setting?", options: ["It can lead to confusion and distraction", "It can prevent you from making mistakes", "It can bring about opportunities for individuals"], answer: "It can prevent you from making mistakes" }
      ]
    }
    ,{ // Trang 11
      situation: "A book about the life of a scientist",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Người nói nói gì về cách viết?</b><br>-> Đọc rất thú vị.<br><br><b>Câu 2: Người nói nói gì về nội dung tổng thể của cuốn sách?</b><br>-> Nó được viết cho đối tượng độc giả đại chúng.",
      questions: [
        { q: "What does the speaker say about the way of writing?", options: ["It is focused on technical details", "It is more of a textbook than a biography", "It is very exciting to read"], answer: "It is very exciting to read" },
        { q: "What does the speaker say about the overall content of the book?", options: ["It has been written for a general audience", "It lacks engaging storytelling", "It is only suitable for experts in the field"], answer: "It has been written for a general audience" }
      ]
    },
    { // Trang 12
      situation: "Working from home",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Cô ấy nói gì về việc làm ở nhà?</b><br>-> Nó không tốt như cô ấy mong đợi.<br><br><b>Câu 2: Theo tác giả, làm việc từ xa:</b><br>-> Phụ thuộc vào hoàn cảnh và tính cách của bạn.",
      questions: [
        { q: "What does she say about working at home?", options: ["There are no distractions", "It wasn't as good as she expected", "Video calls are superior to face-to-face conversation"], answer: "It wasn't as good as she expected" },
        { q: "According to the author, working from home:", options: ["It depends on your situation and personality", "Needs a big home office", "Do not require self-motivation."], answer: "It depends on your situation and personality" }
      ]
    },
    { // Trang 13
      situation: "A new novel (hopeless love)",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1:</b><br>-> Thật khó để có thể đồng cảm/liên hệ.<br><br><b>Câu 2:</b><br>-> Đó là một thất bại đầy tham vọng.",
      questions: [
        { q: "ý 1", options: ["It's easy to relate to", "It's difficult to relate to", "It has too many characters"], answer: "It's difficult to relate to" },
        { q: "ý 2", options: ["It's an ambitious failure", "It lacks a clear plot", "It's a successful piece"], answer: "It's an ambitious failure" }
      ]
    },
    { // Trang 14
      situation: "Life after university",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Cuộc sống thay đổi thế nào với sinh viên sau khi tốt nghiệp?</b><br>-> Họ có khả năng linh hoạt và cởi mở hơn.<br><br><b>Câu 2: Đặc điểm chung của thị trường việc làm sau đại học là gì?</b><br>-> Chúng ngày càng trở nên cạnh tranh hơn.",
      questions: [
        { q: "How does life change for graduates after university?", options: ["They feel more stressed about job seeking", "Many jobs offer great benefits", "They are likely to be more flexible and open-minded"], answer: "They are likely to be more flexible and open-minded" },
        { q: "What is a common characteristic of the job market after university?", options: ["They are becoming more competitive", "More opportunities for networking", "Many jobs offer great benefits"], answer: "They are becoming more competitive" }
      ]
    },
    { // Trang 15
      situation: "Regional Development Planning",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Một trong những lời chỉ trích chính đối với Kế hoạch là gì?</b><br>-> Nó không cung cấp đủ các phương án thay thế cho việc lái xe ô tô.<br><br><b>Câu 2: Kế hoạch Phát triển Khu vực có khả năng gặp phải thách thức gì?</b><br>-> Kế hoạch không sử dụng hiệu quả quỹ đất đai hiện có.",
      questions: [
        { q: "What is one of the main criticisms of the Regional Development Plan?", options: ["It doesn't provide enough alternatives to driving.", "It places too much emphasis on public transportation.", "It is too expensive to implement the plan."], answer: "It doesn't provide enough alternatives to driving." },
        { q: "What challenge is the Regional Development Plan likely to face?", options: ["It may be delayed due to funding issues.", "The plan is not making efficient use of existing land", "It could face difficulties in gaining government approval."], answer: "The plan is not making efficient use of existing land" }
      ]
    },
    { // Trang 16
      situation: "A promotion campaign for a product",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Vấn đề chính trong chiến dịch quảng bá của sản phẩm là gì?</b><br>-> Họ sử dụng các tuyên bố phóng đại (nói quá).<br><br><b>Câu 2: Một vấn đề khác với sản phẩm là gì?</b><br>-> Chi phí sản xuất quá đắt để có thể sinh lời.",
      questions: [
        { q: "What is the main issue with the product's promotion campaign?", options: ["It is using outdated advertising methods", "It is not targeting the correct market", "They use exaggerated claims"], answer: "They use exaggerated claims" },
        { q: "What is another problem with the product?", options: ["It is priced too high compared to its competitors", "It cost too much to make to be profitable", "It is too similar to many existing products"], answer: "It cost too much to make to be profitable" }
      ]
    },
    { // Trang 17
      situation: "A research in happiness",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: MC đài phát thanh nói gì về cách truyền thông đưa tin về nghiên cứu hạnh phúc?</b><br>-> Nó chưa được truyền thông đưa tin một cách chính xác.<br><br><b>Câu 2: Theo MC đài phát thanh, điều gì là không chắc sẽ xảy ra?</b><br>-> Nghiên cứu khó có thể tìm ra một câu trả lời dứt khoát.",
      questions: [
        { q: "What does the radio MC say about how the research on happiness has been covered by the media?", options: ["It has been accurately reported by the media", "It has not been accurately reported by the media", "It has been ignored completely by the media"], answer: "It has not been accurately reported by the media" },
        { q: "According to the radio MC, what is unlikely regarding the research on happiness?", options: ["Research is unlikely to find a conclusive answer", "To find personal happiness", "To discuss happiness in the media"], answer: "Research is unlikely to find a conclusive answer" }
      ]
    },
    { // Trang 18
      situation: "Experience in writing",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Nhà văn tin rằng điều gì giúp cô ấy nhiều nhất trong quá trình viết?</b><br>-> Tạo ra các khoảng thời gian dành riêng cho việc viết lách.<br><br><b>Câu 2: Nhà văn hối hận điều gì trong thời gian bị bí ý tưởng (writer's block)?</b><br>-> Đã từ chối tìm kiếm lời khuyên từ người khác.",
      questions: [
        { q: "What does the writer believe helps her the most in her writing process?", options: ["Writing every day for 15-20 minutes", "Create dedicated periods for writing", "Finding a quiet space to work"], answer: "Create dedicated periods for writing" },
        { q: "What does the writer regret doing during her experience with writer's block?", options: ["Refuse to seek advice from others", "Writing without a plan", "Ignoring feedback from editors"], answer: "Refuse to seek advice from others" }
      ]
    },
    { // Trang 19
      situation: "Professionalism at work",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Chuyên gia nói gì về cốt lõi của sự chuyên nghiệp?</b><br>-> Duy trì một thái độ tích cực.<br><br><b>Câu 2: Chuyên gia nói gì về định nghĩa của sự chuyên nghiệp?</b><br>-> Định nghĩa của chúng ta về nó đang dần thay đổi.",
      questions: [
        { q: "What does the expert say about what being professional is all about?", options: ["To make good impressions", "To create a good working environment", "Maintain a positive attitude"], answer: "Maintain a positive attitude" },
        { q: "What does the expert say about the definition of professionalism?", options: ["It is the same as 40 years ago", "It will not change anymore", "Our definition of it is changing"], answer: "Our definition of it is changing" }
      ]
    },
    { // Trang 20
      situation: "A critic reviews a book about a scientist's life",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1:</b><br>-> Nó sử dụng ngôn ngữ đơn giản để mô tả các ý tưởng phức tạp.<br><br><b>Câu 2:</b><br>-> Nó tương tự như cuốn sách xuất bản trước đó về một nhà khoa học.",
      questions: [
        { q: "ý 1", options: ["It complicate simple terms", "It lacks historical accuracy", "It uses simple language to describe complex ideas"], answer: "It uses simple language to describe complex ideas" },
        { q: "ý 2", options: ["It is similar to the previous book about a scientist", "It mainly focuses on his personal life", "they are different from the old ones about travel"], answer: "It is similar to the previous book about a scientist" }
      ]
    },
    { // Trang 21
      situation: "Security camera",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Ý kiến của người nói về camera an ninh tại nơi làm việc là gì?</b><br>-> Mọi người đang lo lắng không cần thiết về chúng.<br><br><b>Câu 2: Người nói khuyên mọi người nên cảm thấy thế nào về camera?</b><br>-> Mọi người nên cảm thấy yên tâm khi có sự hiện diện của chúng.",
      questions: [
        { q: "What is the speaker's opinion about security cameras at work?", options: ["People are unnecessarily worried about them", "Cameras should be placed to ensure complete coverage.", "Most people don't even realize cameras are present."], answer: "People are unnecessarily worried about them" },
        { q: "How does the speaker suggest people should feel about security cameras at work?", options: ["People often find them intimidating and invasive.", "People should feel reassured about their presence", "Many believe they are only useful after incidents have occurred."], answer: "People should feel reassured about their presence" }
      ]
    },
    { // Trang 22
      situation: "Advertising and sponsoring (A newly broadcasted TV series)",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Tại sao chúng ta không nên tài trợ cho các giải đấu thể thao?</b><br>-> Chúng có thể tạo ra dư luận (hình ảnh) tiêu cực cho môn thể thao.<br><br><b>Câu 2: Tầm quan trọng của quảng cáo là gì?</b><br>-> Nó giúp tiếp cận những khách hàng mới.",
      questions: [
        { q: "Why shouldn't we sponsor sports tournaments?", options: ["They can create unfair competition", "They are too expensive", "They can generate negative publicity for the sport"], answer: "They can generate negative publicity for the sport" },
        { q: "What is the importance of advertising?", options: ["It can build brand recognition", "It helps to reach new customers.", "It increases the product price"], answer: "It helps to reach new customers." }
      ]
    },
    { // Trang 23
      situation: "A new guidebook",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Sách hướng dẫn này mang lại điều gì cho khán giả?</b><br>-> Nó tạo ra một cuộc phiêu lưu.<br><br><b>Câu 2: Ý kiến của người nói về cuốn sách hướng dẫn này là gì?</b><br>-> Nó phù hợp cho những thế hệ nhất định (đặc thù).",
      questions: [
        { q: "What does this guidebook offer to its audience?", options: ["It focuses solely on historical landmarks.", "It is difficult to navigate.", "It creates an adventure."], answer: "It creates an adventure." },
        { q: "What is the speaker's opinion about this guidebook?", options: ["It is suitable for particular generations.", "It caters only to seasoned travelers.", "It is outdated and irrelevant."], answer: "It is suitable for particular generations." }
      ]
    },
    { // Trang 24
      situation: "Personal finances",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Bạn nên làm gì để kiểm soát tốt hơn chi tiêu ngắn hạn của mình?</b><br>-> Theo dõi chi tiêu của bạn theo một kế hoạch hàng tuần.<br><br><b>Câu 2: Người nói gợi ý điều gì để cải thiện quản lý tài chính?</b><br>-> Tìm kiếm lời khuyên từ những người có kinh nghiệm.",
      questions: [
        { q: "What should you do to better control your short-term spending?", options: ["Avoid all unnecessary purchases entirely", "Monitor your spending for a weekly plan", "Use only cash instead of cards"], answer: "Monitor your spending for a weekly plan" },
        { q: "What does the speaker suggest for improving financial management?", options: ["Seek advice from someone who is experienced", "Invest in more financial apps", "Avoid talking about money with friends"], answer: "Seek advice from someone who is experienced" }
      ]
    },
    { // Trang 25
      situation: "Script production",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Ý kiến của người nói về kịch bản này là gì?</b><br>-> Bối cảnh của các nhân vật không được khai thác đầy đủ.<br><br><b>Câu 2: Các ngành công nghiệp ảnh hưởng đến việc sản xuất kịch bản như thế nào?</b><br>-> Nhu cầu mới của ngành đang ảnh hưởng tiêu cực đến việc sản xuất kịch bản.",
      questions: [
        { q: "What is the speaker's opinion on this script?", options: ["The dialogue is too complex for viewers", "The characters' background are not adequately explored", "The setting feels too unrealistic"], answer: "The characters' background are not adequately explored" },
        { q: "How do industries impact script production?", options: ["They increase audience engagement significantly", "They provide more creative freedom to writers", "The new industry demands are negatively influencing script production"], answer: "The new industry demands are negatively influencing script production" }
      ]
    },
    { // Trang 26
      situation: "A restaurant Baloo / La Bella Bistro",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Ý kiến của nhà phê bình về nhà hàng La Bella Bistro là gì?</b><br>-> Tiêu chuẩn phục vụ không tốt.<br><br><b>Câu 2: Điều gì có thể cạnh tranh với dịch vụ giao đồ ăn trực tuyến?</b><br>-> Họ cần làm cho khách hàng cảm thấy được trân trọng và chào đón.",
      questions: [
        { q: "What are the critic's opinions about the restaurant La Bella Bistro?", options: ["The standard of service wasn't good", "The food is not fresh.", "The chef lacks experience"], answer: "The standard of service wasn't good" },
        { q: "What can compete with online food delivery?", options: ["Organic ingredients", "Providing ready-made packs for customers", "They need to make the customers feel valued and welcome"], answer: "They need to make the customers feel valued and welcome" }
      ]
    },
    { // Trang 27
      situation: "A new book/novel",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1:</b><br>-> Cốt truyện rất mạnh mẽ (rất hay).<br><br><b>Câu 2:</b><br>-> Nó rất giống với các cuốn sách khác của cùng tác giả.",
      questions: [
        { q: "ý 1", options: ["The dialogue is poor", "The plot was very strong", "The content is easy to guess"], answer: "The plot was very strong" },
        { q: "ý 2", options: ["They should be announced earlier", "It is poorly edited", "It is very similar to the author's other books"], answer: "It is very similar to the author's other books" }
      ]
    },
    { // Trang 28
      situation: "Building",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1:</b><br>-> Chúng thường thể hiện sự thiếu tham vọng.<br><br><b>Câu 2:</b><br>-> Không tiêu biểu cho các tòa nhà hiện đại.",
      questions: [
        { q: "ý 1", options: ["They lack practical functions", "They often display a lack of ambition", "They show full of ambition"], answer: "They often display a lack of ambition" },
        { q: "ý 2", options: ["Not typical of modern buildings", "They are contemporary buildings", "They are extremely tall"], answer: "Not typical of modern buildings" }
      ]
    },
    { // Trang 29
      situation: "The advertising industry",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Chuyên gia nói gì về mặt tiêu cực của quảng cáo?</b><br>-> Các series phim bị tổn hại do quảng cáo quá mức (tiếp xúc quá nhiều).<br><br><b>Câu 2: Quảng cáo có thể ảnh hưởng đến thể thao theo cách nào?</b><br>-> Chúng có thể tạo ra dư luận (hình ảnh) tiêu cực cho môn thể thao.",
      questions: [
        { q: "What does the expert say about the negative side of advertising?", options: ["Advertisements might sometimes be repetitive, which is annoying.", "Series are damaged by overexposure.", "Advertising costs the same amount of money to produce a movie."], answer: "Series are damaged by overexposure." },
        { q: "In what way can advertising affect sports?", options: ["They can boost ticket sales and sales of sports-related items", "They help to attract more fans", "They can generate negative publicity for the sport"], answer: "They can generate negative publicity for the sport" }
      ]
    },
    { // Trang 30
      situation: "Making plans",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Việc tạo ra từng kế hoạch nhỏ giúp bạn như thế nào?</b><br>-> Chúng giúp bạn đưa ra quyết định.<br><br><b>Câu 2: Nhìn chung, việc tạo một kế hoạch giúp ích cho bạn như thế nào?</b><br>-> Nó yêu cầu bạn phải tự đặt ra cho mình những giới hạn nhất định.",
      questions: [
        { q: "How does creating each small plan help you?", options: ["They increased workload", "They help you make decisions", "They delay overall progress"], answer: "They help you make decisions" },
        { q: "How does creating a plan help you in general?", options: ["It requires you to set yourself certain limits", "It removes all risks from the process", "It guarantees immediate success"], answer: "It requires you to set yourself certain limits" }
      ]
    },
    { // Trang 31
      situation: "The latest scripts for a new show",
      audioSrc: "", transcript: "",
      pageTranslation: "<b>Câu 1: Nhà sản xuất nghĩ gì về các đoạn hội thoại trong chương trình mới?</b><br>-> Chúng có vẻ không thực tế.<br><br><b>Câu 2: Nhu cầu hiện tại của ngành đang ảnh hưởng đến chất lượng kịch bản ra sao?</b><br>-> Nó đang ảnh hưởng tiêu cực đến việc sản xuất kịch bản.",
      questions: [
        { q: "What does the producer think about the dialogues in the new show?", options: ["They are perfectly written and engaging.", "They reflect real-life conversations well.", "They seem unrealistic."], answer: "They seem unrealistic." },
        { q: "How is the current industry demand affecting the quality of script production?", options: ["It is allowing for more thorough script development.", "It is negatively influencing script production.", "It is leading to more innovative ideas."], answer: "It is negatively influencing script production." }
      ]
    }
  ],
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
    <div class="l3-situation">📝 ${item.situation}</div>
    ${item.audioSrc ? `<div class="l3-audio"><audio controls><source src="${item.audioSrc}" type="audio/mpeg"></audio></div>` : ''}
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

    <div id="l3-trans-${page}" style="display:none; margin-top:20px; padding:16px; background:#f8f9fa; border-left:4px solid #6c63ff; border-radius:0 8px 8px 0; font-size:0.9rem; line-height:1.6; color:#333; max-height: 400px; overflow-y: auto;">
      <div style="font-weight:bold; color:#6c63ff; margin-bottom:10px; font-size:1rem;">BẢN DỊCH HỘI THOẠI</div>
      ${item.pageTranscript || ''}
    </div>
  `;
  wrapper.appendChild(div);
}

function renderL4(wrapper) {
  const page = quizState.dataIndex;
  const item = DATA.listening_p4[page];
  if(!item) return;

  // CHỈ XÁO TRỘN ĐÁP ÁN (Giữ nguyên thứ tự câu hỏi)
  if (!quizState.shuffledFlags) quizState.shuffledFlags = {};
  if (!quizState.shuffledFlags[`l4-${page}`]) {
    item.questions.forEach(q => {
      for (let i = q.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
      }
    });
    quizState.shuffledFlags[`l4-${page}`] = true;
  }

  const div = document.createElement('div');
  div.className = 'l4-block';
  div.innerHTML = `
    <div class="l4-situation" style="background:#eef0ff; padding:14px; border-radius:8px; font-weight:700; margin-bottom:20px;">📝 ${item.situation}</div>
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
    
    <div id="l4-trans-${page}" style="display:none; margin-top:20px; padding:16px; background:#f8f9fa; border-left:4px solid #28a745; border-radius:0 8px 8px 0; font-size:0.9rem; line-height:1.6; color:#333;">
      ${item.pageTranslation || ''}
    </div>
  `;
  wrapper.appendChild(div);
}

// ═══════════════════════════════════════════════════════════════
//  KIỂM TRA ĐÚNG/SAI NGAY LẬP TỨC VÀ LƯU TRẠNG THÁI
// ═══════════════════════════════════════════════════════════════

function storeAnswer(key, value) {
  quizState.answers[key] = value;
  updateProgress();
  checkAnswerUI(key); 
  
  // LOGIC HIỂN THỊ BẢN DỊCH CHO PART 3 VÀ PART 4
  const parts = key.split('-');
  const type = parts[0];
  const page = parseInt(parts[1]);

  if (type === 'l4') {
    const numQs = DATA.listening_p4[page].questions.length;
    let answeredCount = 0;
    for (let i = 0; i < numQs; i++) {
      if (quizState.answers[`l4-${page}-${i}`]) answeredCount++;
    }
    if (answeredCount === numQs) {
      const transDiv = document.getElementById(`l4-trans-${page}`);
      if (transDiv) transDiv.style.display = 'block';
    }
  } 
  else if (type === 'l3') {
    const numQs = DATA.listening_p3[page].questions.length;
    let answeredCount = 0;
    for (let i = 0; i < numQs; i++) {
      if (quizState.answers[`l3-${page}-${i}`]) answeredCount++;
    }
    if (answeredCount === numQs) {
      const transDiv = document.getElementById(`l3-trans-${page}`);
      if (transDiv) transDiv.style.display = 'block';
    }
  }
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
