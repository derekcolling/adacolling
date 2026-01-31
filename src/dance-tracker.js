import './dance-tracker.css'

// 24Seven Dance Convention - Tulsa, OK - January 30 - February 1, 2026
// Schedule data - Add/edit entries as needed!
const schedule = [
  // FRIDAY - Mini Category (Routines 1-50)
  { number: 1, name: "Healing", studio: "Club Dance Studio", category: "Mini", type: "Contemporary Solo", day: "friday", time: "10:00 AM" },
  { number: 2, name: "Mambo Italiano", studio: "JMDANCE Company", category: "Mini", type: "Jazz Solo", day: "friday", time: "10:03 AM" },
  { number: 3, name: "Mini Solo 3", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Contemporary Solo", day: "friday", time: "10:06 AM" },
  { number: 4, name: "Mini Solo 4", studio: "Theatre Arts", category: "Mini", type: "Lyrical Solo", day: "friday", time: "10:09 AM" },
  { number: 5, name: "Mini Solo 5", studio: "Pure Movement Dance", category: "Mini", type: "Jazz Solo", day: "friday", time: "10:12 AM" },
  { number: 6, name: "Mini Solo 6", studio: "Club Dance Studio", category: "Mini", type: "Musical Theatre Solo", day: "friday", time: "10:15 AM" },
  { number: 7, name: "Mini Solo 7", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Contemporary Solo", day: "friday", time: "10:18 AM" },
  { number: 8, name: "Mini Solo 8", studio: "Theatre Arts", category: "Mini", type: "Tap Solo", day: "friday", time: "10:21 AM" },
  { number: 9, name: "Mini Solo 9", studio: "Pure Movement Dance", category: "Mini", type: "Lyrical Solo", day: "friday", time: "10:24 AM" },
  { number: 10, name: "Mini Solo 10", studio: "JMDANCE Company", category: "Mini", type: "Jazz Solo", day: "friday", time: "10:27 AM" },
  // Mini solos continue...
  { number: 11, name: "Mini Solo 11", studio: "Club Dance Studio", category: "Mini", type: "Contemporary Solo", day: "friday", time: "10:30 AM" },
  { number: 12, name: "Mini Solo 12", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Lyrical Solo", day: "friday", time: "10:33 AM" },
  { number: 13, name: "Mini Solo 13", studio: "Theatre Arts", category: "Mini", type: "Jazz Solo", day: "friday", time: "10:36 AM" },
  { number: 14, name: "Mini Solo 14", studio: "Pure Movement Dance", category: "Mini", type: "Musical Theatre Solo", day: "friday", time: "10:39 AM" },
  { number: 15, name: "Mini Solo 15", studio: "Club Dance Studio", category: "Mini", type: "Contemporary Solo", day: "friday", time: "10:42 AM" },
  { number: 16, name: "Mini Solo 16", studio: "JMDANCE Company", category: "Mini", type: "Lyrical Solo", day: "friday", time: "10:45 AM" },
  { number: 17, name: "Mini Solo 17", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Jazz Solo", day: "friday", time: "10:48 AM" },
  { number: 18, name: "Mini Solo 18", studio: "Theatre Arts", category: "Mini", type: "Tap Solo", day: "friday", time: "10:51 AM" },
  { number: 19, name: "Mini Solo 19", studio: "Pure Movement Dance", category: "Mini", type: "Contemporary Solo", day: "friday", time: "10:54 AM" },
  { number: 20, name: "Mini Solo 20", studio: "Club Dance Studio", category: "Mini", type: "Lyrical Solo", day: "friday", time: "10:57 AM" },
  // Mini Duo/Trios
  { number: 21, name: "Mini Duo/Trio 21", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Contemporary Duo/Trio", day: "friday", time: "11:00 AM" },
  { number: 22, name: "Mini Duo/Trio 22", studio: "Theatre Arts", category: "Mini", type: "Jazz Duo/Trio", day: "friday", time: "11:04 AM" },
  { number: 23, name: "Mini Duo/Trio 23", studio: "Pure Movement Dance", category: "Mini", type: "Lyrical Duo/Trio", day: "friday", time: "11:08 AM" },
  { number: 24, name: "Mini Duo/Trio 24", studio: "Club Dance Studio", category: "Mini", type: "Contemporary Duo/Trio", day: "friday", time: "11:12 AM" },
  { number: 25, name: "Mini Duo/Trio 25", studio: "JMDANCE Company", category: "Mini", type: "Jazz Duo/Trio", day: "friday", time: "11:16 AM" },
  { number: 26, name: "Mini Solo 26", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Specialty Solo", day: "friday", time: "11:20 AM" },
  { number: 27, name: "Mini Solo 27", studio: "Theatre Arts", category: "Mini", type: "Contemporary Solo", day: "friday", time: "11:23 AM" },
  { number: 28, name: "Mini Solo 28", studio: "Pure Movement Dance", category: "Mini", type: "Jazz Solo", day: "friday", time: "11:26 AM" },
  { number: 29, name: "Mini Solo 29", studio: "Club Dance Studio", category: "Mini", type: "Lyrical Solo", day: "friday", time: "11:29 AM" },
  { number: 30, name: "Mini Solo 30", studio: "JMDANCE Company", category: "Mini", type: "Musical Theatre Solo", day: "friday", time: "11:32 AM" },
  { number: 31, name: "Mini Solo 31", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Contemporary Solo", day: "friday", time: "11:35 AM" },
  { number: 32, name: "Mini Solo 32", studio: "Theatre Arts", category: "Mini", type: "Jazz Solo", day: "friday", time: "11:38 AM" },
  { number: 33, name: "Mini Solo 33", studio: "Pure Movement Dance", category: "Mini", type: "Lyrical Solo", day: "friday", time: "11:41 AM" },
  { number: 34, name: "Mini Solo 34", studio: "Club Dance Studio", category: "Mini", type: "Tap Solo", day: "friday", time: "11:44 AM" },
  { number: 35, name: "Mini Solo 35", studio: "JMDANCE Company", category: "Mini", type: "Contemporary Solo", day: "friday", time: "11:47 AM" },
  { number: 36, name: "Mini Solo 36", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Jazz Solo", day: "friday", time: "11:50 AM" },
  { number: 37, name: "Mini Solo 37", studio: "Theatre Arts", category: "Mini", type: "Lyrical Solo", day: "friday", time: "11:53 AM" },
  { number: 38, name: "Mini Solo 38", studio: "Pure Movement Dance", category: "Mini", type: "Contemporary Solo", day: "friday", time: "11:56 AM" },
  { number: 39, name: "Mini Solo 39", studio: "Club Dance Studio", category: "Mini", type: "Jazz Solo", day: "friday", time: "11:59 AM" },
  { number: 40, name: "Mini Solo 40", studio: "JMDANCE Company", category: "Mini", type: "Musical Theatre Solo", day: "friday", time: "12:02 PM" },
  { number: 41, name: "Mini Group 41", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Contemporary Group", day: "friday", time: "12:06 PM" },
  { number: 42, name: "Mini Group 42", studio: "Theatre Arts", category: "Mini", type: "Jazz Group", day: "friday", time: "12:10 PM" },
  { number: 43, name: "Mini Group 43", studio: "Pure Movement Dance", category: "Mini", type: "Lyrical Group", day: "friday", time: "12:14 PM" },
  { number: 44, name: "Mini Group 44", studio: "Club Dance Studio", category: "Mini", type: "Hip-Hop Group", day: "friday", time: "12:18 PM" },
  { number: 45, name: "Mini Group 45", studio: "JMDANCE Company", category: "Mini", type: "Jazz Group", day: "friday", time: "12:22 PM" },
  { number: 46, name: "Mini Group 46", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Contemporary Group", day: "friday", time: "12:26 PM" },
  { number: 47, name: "Mini Group 47", studio: "Theatre Arts", category: "Mini", type: "Musical Theatre Group", day: "friday", time: "12:30 PM" },
  { number: 48, name: "Mini Group 48", studio: "Pure Movement Dance", category: "Mini", type: "Lyrical Group", day: "friday", time: "12:34 PM" },
  { number: 49, name: "Mini Group 49", studio: "Club Dance Studio", category: "Mini", type: "Jazz Group", day: "friday", time: "12:38 PM" },
  { number: 50, name: "Mini Awards", studio: "", category: "Mini", type: "Awards", day: "friday", time: "12:29 PM" },

  // FRIDAY - Teen Category (Routines 51-105)
  { number: 51, name: "Teen Solo 51", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Contemporary Solo", day: "friday", time: "12:49 PM" },
  { number: 52, name: "Teen Solo 52", studio: "Dancers Edge", category: "Teen", type: "Contemporary Solo", day: "friday", time: "12:52 PM" },
  { number: 53, name: "Teen Solo 53", studio: "South Tulsa Dance Co", category: "Teen", type: "Jazz Solo", day: "friday", time: "12:55 PM" },
  { number: 54, name: "Teen Solo 54", studio: "Elite Dance of Tulsa", category: "Teen", type: "Contemporary Solo", day: "friday", time: "12:58 PM" },
  { number: 55, name: "Teen Solo 55", studio: "Premier Dance", category: "Teen", type: "Lyrical Solo", day: "friday", time: "1:01 PM" },
  { number: 56, name: "Teen Solo 56", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Jazz Solo", day: "friday", time: "1:04 PM" },
  { number: 57, name: "Teen Solo 57", studio: "Dancers Edge", category: "Teen", type: "Contemporary Solo", day: "friday", time: "1:07 PM" },
  { number: 58, name: "Teen Solo 58", studio: "South Tulsa Dance Co", category: "Teen", type: "Musical Theatre Solo", day: "friday", time: "1:10 PM" },
  { number: 59, name: "Teen Solo 59", studio: "Elite Dance of Tulsa", category: "Teen", type: "Lyrical Solo", day: "friday", time: "1:13 PM" },
  { number: 60, name: "Teen Solo 60", studio: "Premier Dance", category: "Teen", type: "Contemporary Solo", day: "friday", time: "1:16 PM" },
  { number: 61, name: "Teen Solo 61", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Jazz Solo", day: "friday", time: "1:19 PM" },
  { number: 62, name: "Teen Solo 62", studio: "Dancers Edge", category: "Teen", type: "Tap Solo", day: "friday", time: "1:22 PM" },
  { number: 63, name: "Teen Solo 63", studio: "South Tulsa Dance Co", category: "Teen", type: "Contemporary Solo", day: "friday", time: "1:25 PM" },
  { number: 64, name: "Teen Solo 64", studio: "Elite Dance of Tulsa", category: "Teen", type: "Specialty Solo", day: "friday", time: "1:28 PM" },
  { number: 65, name: "Teen Solo 65", studio: "Premier Dance", category: "Teen", type: "Lyrical Solo", day: "friday", time: "1:31 PM" },
  { number: 66, name: "Teen Solo 66", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Contemporary Solo", day: "friday", time: "1:34 PM" },
  { number: 67, name: "Teen Solo 67", studio: "Dancers Edge", category: "Teen", type: "Jazz Solo", day: "friday", time: "1:37 PM" },
  { number: 68, name: "Teen Solo 68", studio: "South Tulsa Dance Co", category: "Teen", type: "Contemporary Solo", day: "friday", time: "1:40 PM" },
  { number: 69, name: "Teen Solo 69", studio: "Elite Dance of Tulsa", category: "Teen", type: "Lyrical Solo", day: "friday", time: "1:43 PM" },
  { number: 70, name: "Teen Solo 70", studio: "Premier Dance", category: "Teen", type: "Musical Theatre Solo", day: "friday", time: "1:46 PM" },
  { number: 71, name: "Teen Duo/Trio 71", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Contemporary Duo/Trio", day: "friday", time: "1:50 PM" },
  { number: 72, name: "Teen Duo/Trio 72", studio: "Dancers Edge", category: "Teen", type: "Jazz Duo/Trio", day: "friday", time: "1:54 PM" },
  { number: 73, name: "Teen Duo/Trio 73", studio: "South Tulsa Dance Co", category: "Teen", type: "Lyrical Duo/Trio", day: "friday", time: "1:58 PM" },
  { number: 74, name: "Teen Duo/Trio 74", studio: "Elite Dance of Tulsa", category: "Teen", type: "Contemporary Duo/Trio", day: "friday", time: "2:02 PM" },
  { number: 75, name: "Teen Duo/Trio 75", studio: "Premier Dance", category: "Teen", type: "Jazz Duo/Trio", day: "friday", time: "2:06 PM" },
  { number: 76, name: "Teen Solo 76", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Contemporary Solo", day: "friday", time: "2:09 PM" },
  { number: 77, name: "Teen Solo 77", studio: "Dancers Edge", category: "Teen", type: "Lyrical Solo", day: "friday", time: "2:12 PM" },
  { number: 78, name: "Teen Solo 78", studio: "South Tulsa Dance Co", category: "Teen", type: "Jazz Solo", day: "friday", time: "2:15 PM" },
  { number: 79, name: "Teen Solo 79", studio: "Elite Dance of Tulsa", category: "Teen", type: "Contemporary Solo", day: "friday", time: "2:18 PM" },
  { number: 80, name: "Teen Solo 80", studio: "Premier Dance", category: "Teen", type: "Tap Solo", day: "friday", time: "2:21 PM" },
  { number: 81, name: "Teen Solo 81", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Lyrical Solo", day: "friday", time: "2:24 PM" },
  { number: 82, name: "Teen Solo 82", studio: "Dancers Edge", category: "Teen", type: "Contemporary Solo", day: "friday", time: "2:27 PM" },
  { number: 83, name: "Teen Solo 83", studio: "South Tulsa Dance Co", category: "Teen", type: "Jazz Solo", day: "friday", time: "2:30 PM" },
  { number: 84, name: "Teen Solo 84", studio: "Elite Dance of Tulsa", category: "Teen", type: "Musical Theatre Solo", day: "friday", time: "2:33 PM" },
  { number: 85, name: "Teen Solo 85", studio: "Premier Dance", category: "Teen", type: "Contemporary Solo", day: "friday", time: "2:36 PM" },
  { number: 86, name: "Teen Group 86", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Contemporary Group", day: "friday", time: "2:40 PM" },
  { number: 87, name: "Teen Group 87", studio: "Dancers Edge", category: "Teen", type: "Jazz Group", day: "friday", time: "2:44 PM" },
  { number: 88, name: "Teen Group 88", studio: "South Tulsa Dance Co", category: "Teen", type: "Lyrical Group", day: "friday", time: "2:48 PM" },
  { number: 89, name: "Teen Group 89", studio: "Elite Dance of Tulsa", category: "Teen", type: "Hip-Hop Group", day: "friday", time: "2:52 PM" },
  { number: 90, name: "Teen Group 90", studio: "Premier Dance", category: "Teen", type: "Contemporary Group", day: "friday", time: "2:56 PM" },
  { number: 91, name: "Teen Group 91", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Jazz Group", day: "friday", time: "3:00 PM" },
  { number: 92, name: "Teen Group 92", studio: "Dancers Edge", category: "Teen", type: "Musical Theatre Group", day: "friday", time: "3:04 PM" },
  { number: 93, name: "Teen Group 93", studio: "South Tulsa Dance Co", category: "Teen", type: "Lyrical Group", day: "friday", time: "3:08 PM" },
  { number: 94, name: "Teen Group 94", studio: "Elite Dance of Tulsa", category: "Teen", type: "Contemporary Group", day: "friday", time: "3:12 PM" },
  { number: 95, name: "Teen Group 95", studio: "Premier Dance", category: "Teen", type: "Jazz Group", day: "friday", time: "3:16 PM" },
  { number: 96, name: "Teen Group 96", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Tap Group", day: "friday", time: "3:20 PM" },
  { number: 97, name: "Teen Group 97", studio: "Dancers Edge", category: "Teen", type: "Contemporary Group", day: "friday", time: "3:24 PM" },
  { number: 98, name: "Teen Group 98", studio: "South Tulsa Dance Co", category: "Teen", type: "Specialty Group", day: "friday", time: "3:28 PM" },
  { number: 99, name: "Teen Group 99", studio: "Elite Dance of Tulsa", category: "Teen", type: "Jazz Group", day: "friday", time: "3:32 PM" },
  { number: 100, name: "Teen Group 100", studio: "Premier Dance", category: "Teen", type: "Lyrical Group", day: "friday", time: "3:36 PM" },
  { number: 101, name: "Teen Group 101", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Contemporary Group", day: "friday", time: "3:40 PM" },
  { number: 102, name: "Teen Group 102", studio: "Dancers Edge", category: "Teen", type: "Hip-Hop Group", day: "friday", time: "3:44 PM" },
  { number: 103, name: "Teen Group 103", studio: "South Tulsa Dance Co", category: "Teen", type: "Jazz Group", day: "friday", time: "3:48 PM" },
  { number: 104, name: "Teen Group 104", studio: "Elite Dance of Tulsa", category: "Teen", type: "Musical Theatre Group", day: "friday", time: "3:52 PM" },
  { number: 105, name: "Teen Awards", studio: "", category: "Teen", type: "Awards", day: "friday", time: "3:37 PM" },

  // FRIDAY - Junior Category (Routines 106-182)
  { number: 106, name: "Junior Extended Line 106", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Contemporary Extended Line", day: "friday", time: "3:57 PM" },
  { number: 107, name: "Junior Group 107", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Jazz Group", day: "friday", time: "4:02 PM" },
  { number: 108, name: "Junior Group 108", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Hip-Hop Group", day: "friday", time: "4:06 PM" },
  { number: 109, name: "Junior Group 109", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Lyrical Group", day: "friday", time: "4:10 PM" },
  { number: 110, name: "Junior Group 110", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Group", day: "friday", time: "4:14 PM" },
  { number: 111, name: "Junior Solo 111", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Contemporary Solo", day: "friday", time: "4:17 PM" },
  { number: 112, name: "Junior Solo 112", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Solo", day: "friday", time: "4:20 PM" },
  { number: 113, name: "Junior Solo 113", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Lyrical Solo", day: "friday", time: "4:23 PM" },
  { number: 114, name: "Junior Solo 114", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Tap Solo", day: "friday", time: "4:26 PM" },
  { number: 115, name: "Junior Solo 115", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Contemporary Solo", day: "friday", time: "4:29 PM" },
  { number: 116, name: "Junior Solo 116", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Ballet Solo", day: "friday", time: "4:32 PM" },
  { number: 117, name: "Junior Solo 117", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Jazz Solo", day: "friday", time: "4:35 PM" },
  { number: 118, name: "Junior Solo 118", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Musical Theatre Solo", day: "friday", time: "4:38 PM" },
  { number: 119, name: "Junior Solo 119", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Solo", day: "friday", time: "4:41 PM" },
  { number: 120, name: "Junior Solo 120", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Lyrical Solo", day: "friday", time: "4:44 PM" },
  { number: 121, name: "Junior Solo 121", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Solo", day: "friday", time: "4:47 PM" },
  { number: 122, name: "Junior Solo 122", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Specialty Solo", day: "friday", time: "4:50 PM" },
  { number: 123, name: "Junior Solo 123", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Contemporary Solo", day: "friday", time: "4:53 PM" },
  { number: 124, name: "Junior Solo 124", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Tap Solo", day: "friday", time: "4:56 PM" },
  { number: 125, name: "Junior Solo 125", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Lyrical Solo", day: "friday", time: "4:59 PM" },
  { number: 126, name: "Junior Solo 126", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Jazz Solo", day: "friday", time: "5:02 PM" },
  { number: 127, name: "Junior Solo 127", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Contemporary Solo", day: "friday", time: "5:05 PM" },
  { number: 128, name: "Junior Solo 128", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Musical Theatre Solo", day: "friday", time: "5:08 PM" },
  { number: 129, name: "Junior Solo 129", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Lyrical Solo", day: "friday", time: "5:11 PM" },
  { number: 130, name: "Junior Solo 130", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Solo", day: "friday", time: "5:14 PM" },
  { number: 131, name: "Junior Duo/Trio 131", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Duo/Trio", day: "friday", time: "5:18 PM" },
  { number: 132, name: "Junior Duo/Trio 132", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Jazz Duo/Trio", day: "friday", time: "5:22 PM" },
  { number: 133, name: "Junior Duo/Trio 133", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Lyrical Duo/Trio", day: "friday", time: "5:26 PM" },
  { number: 134, name: "Junior Duo/Trio 134", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Duo/Trio", day: "friday", time: "5:30 PM" },
  { number: 135, name: "Junior Duo/Trio 135", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Tap Duo/Trio", day: "friday", time: "5:34 PM" },
  { number: 136, name: "Junior Solo 136", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Contemporary Solo", day: "friday", time: "5:37 PM" },
  { number: 137, name: "Junior Solo 137", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Jazz Solo", day: "friday", time: "5:40 PM" },
  { number: 138, name: "Junior Solo 138", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Lyrical Solo", day: "friday", time: "5:43 PM" },
  { number: 139, name: "Junior Solo 139", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Contemporary Solo", day: "friday", time: "5:46 PM" },
  { number: 140, name: "Junior Solo 140", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Specialty Solo", day: "friday", time: "5:49 PM" },
  { number: 141, name: "Junior Solo 141", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Jazz Solo", day: "friday", time: "5:52 PM" },
  { number: 142, name: "Junior Solo 142", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Lyrical Solo", day: "friday", time: "5:55 PM" },
  { number: 143, name: "Junior Solo 143", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Solo", day: "friday", time: "5:58 PM" },
  { number: 144, name: "Junior Solo 144", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Tap Solo", day: "friday", time: "6:01 PM" },
  { number: 145, name: "Junior Solo 145", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Musical Theatre Solo", day: "friday", time: "6:04 PM" },
  { number: 146, name: "Junior Solo 146", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Jazz Solo", day: "friday", time: "6:07 PM" },
  { number: 147, name: "Junior Solo 147", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Contemporary Solo", day: "friday", time: "6:10 PM" },
  { number: 148, name: "Junior Solo 148", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Lyrical Solo", day: "friday", time: "6:13 PM" },
  { number: 149, name: "Junior Solo 149", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Jazz Solo", day: "friday", time: "6:16 PM" },
  { number: 150, name: "Junior Solo 150", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Contemporary Solo", day: "friday", time: "6:19 PM" },
  { number: 151, name: "Junior Group 151", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Contemporary Group", day: "friday", time: "6:23 PM" },
  { number: 152, name: "Junior Group 152", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Jazz Group", day: "friday", time: "6:27 PM" },
  { number: 153, name: "Junior Group 153", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Lyrical Group", day: "friday", time: "6:31 PM" },
  { number: 154, name: "Junior Group 154", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Hip-Hop Group", day: "friday", time: "6:35 PM" },
  { number: 155, name: "Junior Group 155", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Group", day: "friday", time: "6:39 PM" },
  { number: 156, name: "Junior Group 156", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Musical Theatre Group", day: "friday", time: "6:43 PM" },
  { number: 157, name: "Junior Group 157", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Group", day: "friday", time: "6:47 PM" },
  { number: 158, name: "Junior Group 158", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Tap Group", day: "friday", time: "6:51 PM" },
  { number: 159, name: "Junior Group 159", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Contemporary Group", day: "friday", time: "6:55 PM" },
  { number: 160, name: "Junior Group 160", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Lyrical Group", day: "friday", time: "6:59 PM" },
  { number: 161, name: "Junior Group 161", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Jazz Group", day: "friday", time: "7:03 PM" },
  { number: 162, name: "Junior Group 162", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Specialty Group", day: "friday", time: "7:07 PM" },
  { number: 163, name: "Junior Group 163", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Contemporary Group", day: "friday", time: "7:11 PM" },
  { number: 164, name: "Junior Group 164", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Hip-Hop Group", day: "friday", time: "7:15 PM" },
  { number: 165, name: "Junior Group 165", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Jazz Group", day: "friday", time: "7:19 PM" },
  { number: 166, name: "Junior Group 166", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Lyrical Group", day: "friday", time: "7:23 PM" },
  { number: 167, name: "Junior Group 167", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Group", day: "friday", time: "7:27 PM" },
  { number: 168, name: "Junior Group 168", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Musical Theatre Group", day: "friday", time: "7:31 PM" },
  { number: 169, name: "Junior Group 169", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Group", day: "friday", time: "7:35 PM" },
  { number: 170, name: "Junior Group 170", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Group", day: "friday", time: "7:39 PM" },
  { number: 171, name: "Junior Extended Line 171", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Jazz Extended Line", day: "friday", time: "7:44 PM" },
  { number: 172, name: "Junior Extended Line 172", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Contemporary Extended Line", day: "friday", time: "7:49 PM" },
  { number: 173, name: "Junior Extended Line 173", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Lyrical Extended Line", day: "friday", time: "7:54 PM" },
  { number: 174, name: "Junior Extended Line 174", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Hip-Hop Extended Line", day: "friday", time: "7:59 PM" },
  { number: 175, name: "Junior Extended Line 175", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Extended Line", day: "friday", time: "8:04 PM" },
  { number: 176, name: "Junior Production 176", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Production", day: "friday", time: "8:10 PM" },
  { number: 177, name: "Junior Production 177", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Musical Theatre Production", day: "friday", time: "8:17 PM" },
  { number: 178, name: "Junior Production 178", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Production", day: "friday", time: "8:24 PM" },
  { number: 179, name: "Junior Production 179", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Production", day: "friday", time: "8:31 PM" },
  { number: 180, name: "Junior Production 180", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Lyrical Production", day: "friday", time: "8:38 PM" },
  { number: 181, name: "Junior Production 181", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Hip-Hop Production", day: "friday", time: "8:45 PM" },
  { number: 182, name: "Junior Awards", studio: "", category: "Junior", type: "Awards", day: "friday", time: "8:08 PM" },

  // FRIDAY - Senior Category (Routines 183-224)
  { number: 183, name: "Senior Solo 183", studio: "Premier Dance", category: "Senior", type: "Contemporary Solo", day: "friday", time: "8:08 PM" },
  { number: 184, name: "Senior Solo 184", studio: "South Tulsa Dance Co", category: "Senior", type: "Jazz Solo", day: "friday", time: "8:11 PM" },
  { number: 185, name: "Senior Solo 185", studio: "Elite Dance of Tulsa", category: "Senior", type: "Lyrical Solo", day: "friday", time: "8:14 PM" },
  { number: 186, name: "Senior Solo 186", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Contemporary Solo", day: "friday", time: "8:17 PM" },
  { number: 187, name: "Senior Solo 187", studio: "Dancers Edge", category: "Senior", type: "Tap Solo", day: "friday", time: "8:20 PM" },
  { number: 188, name: "Senior Solo 188", studio: "Premier Dance", category: "Senior", type: "Musical Theatre Solo", day: "friday", time: "8:23 PM" },
  { number: 189, name: "Senior Solo 189", studio: "South Tulsa Dance Co", category: "Senior", type: "Contemporary Solo", day: "friday", time: "8:26 PM" },
  { number: 190, name: "Senior Solo 190", studio: "Elite Dance of Tulsa", category: "Senior", type: "Jazz Solo", day: "friday", time: "8:29 PM" },
  { number: 191, name: "Senior Solo 191", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Specialty Solo", day: "friday", time: "8:32 PM" },
  { number: 192, name: "Senior Solo 192", studio: "Dancers Edge", category: "Senior", type: "Lyrical Solo", day: "friday", time: "8:35 PM" },
  { number: 193, name: "Senior Solo 193", studio: "Premier Dance", category: "Senior", type: "Contemporary Solo", day: "friday", time: "8:38 PM" },
  { number: 194, name: "Senior Solo 194", studio: "South Tulsa Dance Co", category: "Senior", type: "Jazz Solo", day: "friday", time: "8:41 PM" },
  { number: 195, name: "Senior Solo 195", studio: "Elite Dance of Tulsa", category: "Senior", type: "Contemporary Solo", day: "friday", time: "8:44 PM" },
  { number: 196, name: "Senior Solo 196", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Lyrical Solo", day: "friday", time: "8:47 PM" },
  { number: 197, name: "Senior Solo 197", studio: "Dancers Edge", category: "Senior", type: "Tap Solo", day: "friday", time: "8:50 PM" },
  { number: 198, name: "Senior Solo 198", studio: "Premier Dance", category: "Senior", type: "Musical Theatre Solo", day: "friday", time: "8:53 PM" },
  { number: 199, name: "Senior Solo 199", studio: "South Tulsa Dance Co", category: "Senior", type: "Jazz Solo", day: "friday", time: "8:56 PM" },
  { number: 200, name: "Senior Solo 200", studio: "Elite Dance of Tulsa", category: "Senior", type: "Contemporary Solo", day: "friday", time: "8:59 PM" },
  { number: 201, name: "Senior Duo/Trio 201", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Contemporary Duo/Trio", day: "friday", time: "9:03 PM" },
  { number: 202, name: "Senior Duo/Trio 202", studio: "Dancers Edge", category: "Senior", type: "Jazz Duo/Trio", day: "friday", time: "9:07 PM" },
  { number: 203, name: "Senior Duo/Trio 203", studio: "Premier Dance", category: "Senior", type: "Lyrical Duo/Trio", day: "friday", time: "9:11 PM" },
  { number: 204, name: "Senior Duo/Trio 204", studio: "South Tulsa Dance Co", category: "Senior", type: "Contemporary Duo/Trio", day: "friday", time: "9:15 PM" },
  { number: 205, name: "Senior Duo/Trio 205", studio: "Elite Dance of Tulsa", category: "Senior", type: "Jazz Duo/Trio", day: "friday", time: "9:19 PM" },
  { number: 206, name: "Senior Solo 206", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Contemporary Solo", day: "friday", time: "9:22 PM" },
  { number: 207, name: "Senior Solo 207", studio: "Dancers Edge", category: "Senior", type: "Lyrical Solo", day: "friday", time: "9:25 PM" },
  { number: 208, name: "Senior Solo 208", studio: "Premier Dance", category: "Senior", type: "Jazz Solo", day: "friday", time: "9:28 PM" },
  { number: 209, name: "Senior Solo 209", studio: "South Tulsa Dance Co", category: "Senior", type: "Contemporary Solo", day: "friday", time: "9:31 PM" },
  { number: 210, name: "Senior Solo 210", studio: "Elite Dance of Tulsa", category: "Senior", type: "Specialty Solo", day: "friday", time: "9:34 PM" },
  { number: 211, name: "Senior Solo 211", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Lyrical Solo", day: "friday", time: "9:37 PM" },
  { number: 212, name: "Senior Solo 212", studio: "Dancers Edge", category: "Senior", type: "Jazz Solo", day: "friday", time: "9:40 PM" },
  { number: 213, name: "Senior Solo 213", studio: "Premier Dance", category: "Senior", type: "Contemporary Solo", day: "friday", time: "9:43 PM" },
  { number: 214, name: "Senior Solo 214", studio: "South Tulsa Dance Co", category: "Senior", type: "Musical Theatre Solo", day: "friday", time: "9:46 PM" },
  { number: 215, name: "Senior Solo 215", studio: "Elite Dance of Tulsa", category: "Senior", type: "Tap Solo", day: "friday", time: "9:49 PM" },
  { number: 216, name: "Senior Solo 216", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Lyrical Solo", day: "friday", time: "9:52 PM" },
  { number: 217, name: "Senior Solo 217", studio: "Dancers Edge", category: "Senior", type: "Contemporary Solo", day: "friday", time: "9:55 PM" },
  { number: 218, name: "Senior Solo 218", studio: "Premier Dance", category: "Senior", type: "Jazz Solo", day: "friday", time: "9:58 PM" },
  { number: 219, name: "Senior Solo 219", studio: "South Tulsa Dance Co", category: "Senior", type: "Contemporary Solo", day: "friday", time: "10:01 PM" },
  { number: 220, name: "Senior Solo 220", studio: "Elite Dance of Tulsa", category: "Senior", type: "Lyrical Solo", day: "friday", time: "10:04 PM" },
  { number: 221, name: "Senior Solo 221", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Jazz Solo", day: "friday", time: "10:07 PM" },
  { number: 222, name: "Senior Solo 222", studio: "Dancers Edge", category: "Senior", type: "Contemporary Solo", day: "friday", time: "10:10 PM" },
  { number: 223, name: "Senior Solo 223", studio: "Premier Dance", category: "Senior", type: "Specialty Solo", day: "friday", time: "10:13 PM" },
  { number: 224, name: "Senior Awards", studio: "", category: "Senior", type: "Awards", day: "friday", time: "10:34 PM" },

  // SATURDAY - Groups & Extended Lines (Routines 225-325)
  { number: 225, name: "Saturday Group 225", studio: "Premier Dance", category: "Mini", type: "Contemporary Group", day: "saturday", time: "7:30 AM" },
  { number: 226, name: "Saturday Group 226", studio: "Pure Movement Dance", category: "Mini", type: "Jazz Group", day: "saturday", time: "7:34 AM" },
  { number: 227, name: "Saturday Group 227", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Lyrical Group", day: "saturday", time: "7:38 AM" },
  { number: 228, name: "Saturday Group 228", studio: "Theatre Arts", category: "Mini", type: "Hip-Hop Group", day: "saturday", time: "7:42 AM" },
  { number: 229, name: "Saturday Group 229", studio: "Club Dance Studio", category: "Mini", type: "Musical Theatre Group", day: "saturday", time: "7:46 AM" },
  { number: 230, name: "Saturday Group 230", studio: "JMDANCE Company", category: "Mini", type: "Contemporary Group", day: "saturday", time: "7:50 AM" },
  { number: 231, name: "Saturday Group 231", studio: "Premier Dance", category: "Teen", type: "Jazz Group", day: "saturday", time: "7:54 AM" },
  { number: 232, name: "Saturday Group 232", studio: "South Tulsa Dance Co", category: "Teen", type: "Contemporary Group", day: "saturday", time: "7:58 AM" },
  { number: 233, name: "Saturday Group 233", studio: "Elite Dance of Tulsa", category: "Teen", type: "Lyrical Group", day: "saturday", time: "8:02 AM" },
  { number: 234, name: "Saturday Group 234", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Hip-Hop Group", day: "saturday", time: "8:06 AM" },
  { number: 235, name: "Saturday Group 235", studio: "Dancers Edge", category: "Teen", type: "Jazz Group", day: "saturday", time: "8:10 AM" },
  { number: 236, name: "Saturday Group 236", studio: "Premier Dance", category: "Teen", type: "Contemporary Group", day: "saturday", time: "8:14 AM" },
  { number: 237, name: "Saturday Group 237", studio: "South Tulsa Dance Co", category: "Teen", type: "Musical Theatre Group", day: "saturday", time: "8:18 AM" },
  { number: 238, name: "Saturday Group 238", studio: "Elite Dance of Tulsa", category: "Teen", type: "Tap Group", day: "saturday", time: "8:22 AM" },
  { number: 239, name: "Saturday Group 239", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Lyrical Group", day: "saturday", time: "8:26 AM" },
  { number: 240, name: "Saturday Group 240", studio: "Dancers Edge", category: "Teen", type: "Contemporary Group", day: "saturday", time: "8:30 AM" },
  { number: 241, name: "Saturday Extended Line 241", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Extended Line", day: "saturday", time: "8:35 AM" },
  { number: 242, name: "Saturday Extended Line 242", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Extended Line", day: "saturday", time: "8:40 AM" },
  { number: 243, name: "Saturday Extended Line 243", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Lyrical Extended Line", day: "saturday", time: "8:45 AM" },
  { number: 244, name: "Saturday Group 244", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Hip-Hop Group", day: "saturday", time: "8:49 AM" },
  { number: 245, name: "Saturday Group 245", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Jazz Group", day: "saturday", time: "8:53 AM" },
  { number: 246, name: "Saturday Group 246", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Contemporary Group", day: "saturday", time: "8:57 AM" },
  { number: 247, name: "Saturday Group 247", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Musical Theatre Group", day: "saturday", time: "9:01 AM" },
  { number: 248, name: "Saturday Group 248", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Lyrical Group", day: "saturday", time: "9:05 AM" },
  { number: 249, name: "Saturday Group 249", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Jazz Group", day: "saturday", time: "9:09 AM" },
  { number: 250, name: "Saturday Group 250", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Contemporary Group", day: "saturday", time: "9:13 AM" },
  { number: 251, name: "Saturday Group 251", studio: "High Pointe Performing Arts Studio", category: "Senior", type: "Jazz Group", day: "saturday", time: "9:17 AM" },
  { number: 252, name: "Saturday Group 252", studio: "Premier Dance", category: "Senior", type: "Contemporary Group", day: "saturday", time: "9:21 AM" },
  { number: 253, name: "Saturday Group 253", studio: "South Tulsa Dance Co", category: "Senior", type: "Lyrical Group", day: "saturday", time: "9:25 AM" },
  { number: 254, name: "Saturday Group 254", studio: "Elite Dance of Tulsa", category: "Senior", type: "Hip-Hop Group", day: "saturday", time: "9:29 AM" },
  { number: 255, name: "Saturday Group 255", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Jazz Group", day: "saturday", time: "9:33 AM" },
  { number: 256, name: "Saturday Group 256", studio: "Dancers Edge", category: "Senior", type: "Contemporary Group", day: "saturday", time: "9:37 AM" },
  { number: 257, name: "Saturday Group 257", studio: "Premier Dance", category: "Senior", type: "Musical Theatre Group", day: "saturday", time: "9:41 AM" },
  { number: 258, name: "Saturday Group 258", studio: "South Tulsa Dance Co", category: "Senior", type: "Tap Group", day: "saturday", time: "9:45 AM" },
  { number: 259, name: "Break", studio: "", category: "", type: "10 Minute Break", day: "saturday", time: "9:50 AM" },
  { number: 260, name: "Saturday Group 260", studio: "Elite Dance of Tulsa", category: "Senior", type: "Lyrical Group", day: "saturday", time: "10:00 AM" },
  { number: 261, name: "Saturday Group 261", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Contemporary Group", day: "saturday", time: "10:04 AM" },
  { number: 262, name: "Saturday Group 262", studio: "Dancers Edge", category: "Senior", type: "Jazz Group", day: "saturday", time: "10:08 AM" },
  { number: 263, name: "Saturday Extended Line 263", studio: "Premier Dance", category: "Senior", type: "Contemporary Extended Line", day: "saturday", time: "10:13 AM" },
  { number: 264, name: "Saturday Extended Line 264", studio: "South Tulsa Dance Co", category: "Senior", type: "Jazz Extended Line", day: "saturday", time: "10:18 AM" },
  { number: 265, name: "Saturday Extended Line 265", studio: "Elite Dance of Tulsa", category: "Senior", type: "Lyrical Extended Line", day: "saturday", time: "10:23 AM" },
  { number: 266, name: "Saturday Group 266", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Contemporary Group", day: "saturday", time: "10:27 AM" },
  { number: 267, name: "Saturday Group 267", studio: "Dancers Edge", category: "Teen", type: "Jazz Group", day: "saturday", time: "10:31 AM" },
  { number: 268, name: "Saturday Group 268", studio: "Premier Dance", category: "Teen", type: "Lyrical Group", day: "saturday", time: "10:35 AM" },
  { number: 269, name: "Saturday Group 269", studio: "South Tulsa Dance Co", category: "Teen", type: "Hip-Hop Group", day: "saturday", time: "10:39 AM" },
  { number: 270, name: "Saturday Group 270", studio: "Elite Dance of Tulsa", category: "Teen", type: "Contemporary Group", day: "saturday", time: "10:43 AM" },
  { number: 271, name: "Saturday Extended Line 271", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Jazz Extended Line", day: "saturday", time: "10:48 AM" },
  { number: 272, name: "Saturday Extended Line 272", studio: "Dancers Edge", category: "Teen", type: "Contemporary Extended Line", day: "saturday", time: "10:53 AM" },
  { number: 273, name: "Saturday Extended Line 273", studio: "Premier Dance", category: "Teen", type: "Lyrical Extended Line", day: "saturday", time: "10:58 AM" },
  { number: 274, name: "Saturday Group 274", studio: "Pure Movement Dance", category: "Mini", type: "Jazz Group", day: "saturday", time: "11:02 AM" },
  { number: 275, name: "Saturday Group 275", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Contemporary Group", day: "saturday", time: "11:06 AM" },
  { number: 276, name: "Saturday Group 276", studio: "Theatre Arts", category: "Mini", type: "Lyrical Group", day: "saturday", time: "11:10 AM" },
  { number: 277, name: "Saturday Group 277", studio: "Club Dance Studio", category: "Mini", type: "Hip-Hop Group", day: "saturday", time: "11:14 AM" },
  { number: 278, name: "Saturday Group 278", studio: "JMDANCE Company", category: "Mini", type: "Jazz Group", day: "saturday", time: "11:18 AM" },
  { number: 279, name: "Saturday Extended Line 279", studio: "Pure Movement Dance", category: "Mini", type: "Contemporary Extended Line", day: "saturday", time: "11:23 AM" },
  { number: 280, name: "Saturday Extended Line 280", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Jazz Extended Line", day: "saturday", time: "11:28 AM" },
  { number: 281, name: "Saturday Production 281", studio: "Theatre Arts", category: "Mini", type: "Musical Theatre Production", day: "saturday", time: "11:35 AM" },
  { number: 282, name: "Saturday Production 282", studio: "Club Dance Studio", category: "Mini", type: "Contemporary Production", day: "saturday", time: "11:42 AM" },
  { number: 283, name: "Saturday Group 283", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Group", day: "saturday", time: "11:46 AM" },
  { number: 284, name: "Saturday Group 284", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Group", day: "saturday", time: "11:50 AM" },
  { number: 285, name: "Saturday Group 285", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Lyrical Group", day: "saturday", time: "11:54 AM" },
  { number: 286, name: "Saturday Group 286", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Hip-Hop Group", day: "saturday", time: "11:58 AM" },
  { number: 287, name: "Saturday Group 287", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Jazz Group", day: "saturday", time: "12:02 PM" },
  { number: 288, name: "Saturday Group 288", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Contemporary Group", day: "saturday", time: "12:06 PM" },
  { number: 289, name: "Saturday Group 289", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Musical Theatre Group", day: "saturday", time: "12:10 PM" },
  { number: 290, name: "Saturday Group 290", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Tap Group", day: "saturday", time: "12:14 PM" },
  { number: 291, name: "Saturday Extended Line 291", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Contemporary Extended Line", day: "saturday", time: "12:19 PM" },
  { number: 292, name: "Saturday Extended Line 292", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Extended Line", day: "saturday", time: "12:24 PM" },
  { number: 293, name: "Saturday Extended Line 293", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Lyrical Extended Line", day: "saturday", time: "12:29 PM" },
  { number: 294, name: "Saturday Production 294", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Contemporary Production", day: "saturday", time: "12:36 PM" },
  { number: 295, name: "Saturday Production 295", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Musical Theatre Production", day: "saturday", time: "12:43 PM" },
  { number: 296, name: "Saturday Group 296", studio: "Premier Dance", category: "Senior", type: "Contemporary Group", day: "saturday", time: "12:47 PM" },
  { number: 297, name: "Saturday Group 297", studio: "South Tulsa Dance Co", category: "Senior", type: "Jazz Group", day: "saturday", time: "12:51 PM" },
  { number: 298, name: "Saturday Group 298", studio: "Elite Dance of Tulsa", category: "Senior", type: "Lyrical Group", day: "saturday", time: "12:55 PM" },
  { number: 299, name: "Saturday Group 299", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Hip-Hop Group", day: "saturday", time: "12:59 PM" },
  { number: 300, name: "Saturday Group 300", studio: "Dancers Edge", category: "Senior", type: "Contemporary Group", day: "saturday", time: "1:03 PM" },
  { number: 301, name: "Saturday Extended Line 301", studio: "Premier Dance", category: "Senior", type: "Jazz Extended Line", day: "saturday", time: "1:08 PM" },
  { number: 302, name: "Saturday Extended Line 302", studio: "South Tulsa Dance Co", category: "Senior", type: "Contemporary Extended Line", day: "saturday", time: "1:13 PM" },
  { number: 303, name: "Saturday Extended Line 303", studio: "Elite Dance of Tulsa", category: "Senior", type: "Lyrical Extended Line", day: "saturday", time: "1:18 PM" },
  { number: 304, name: "Saturday Production 304", studio: "Turning Pointe Dance of Tulsa", category: "Senior", type: "Contemporary Production", day: "saturday", time: "1:25 PM" },
  { number: 305, name: "Saturday Production 305", studio: "Dancers Edge", category: "Senior", type: "Jazz Production", day: "saturday", time: "1:32 PM" },
  { number: 306, name: "Saturday Group 306", studio: "Premier Dance", category: "Teen", type: "Contemporary Group", day: "saturday", time: "1:36 PM" },
  { number: 307, name: "Saturday Group 307", studio: "South Tulsa Dance Co", category: "Teen", type: "Jazz Group", day: "saturday", time: "1:40 PM" },
  { number: 308, name: "Saturday Group 308", studio: "Elite Dance of Tulsa", category: "Teen", type: "Lyrical Group", day: "saturday", time: "1:44 PM" },
  { number: 309, name: "Saturday Extended Line 309", studio: "Turning Pointe Dance of Tulsa", category: "Teen", type: "Hip-Hop Extended Line", day: "saturday", time: "1:49 PM" },
  { number: 310, name: "Saturday Extended Line 310", studio: "Dancers Edge", category: "Teen", type: "Contemporary Extended Line", day: "saturday", time: "1:54 PM" },
  { number: 311, name: "Saturday Production 311", studio: "Premier Dance", category: "Teen", type: "Jazz Production", day: "saturday", time: "2:01 PM" },
  { number: 312, name: "Saturday Production 312", studio: "South Tulsa Dance Co", category: "Teen", type: "Contemporary Production", day: "saturday", time: "2:08 PM" },
  { number: 313, name: "Saturday Group 313", studio: "Pure Movement Dance", category: "Mini", type: "Jazz Group", day: "saturday", time: "2:12 PM" },
  { number: 314, name: "Saturday Group 314", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Contemporary Group", day: "saturday", time: "2:16 PM" },
  { number: 315, name: "Saturday Group 315", studio: "Theatre Arts", category: "Mini", type: "Lyrical Group", day: "saturday", time: "2:20 PM" },
  { number: 316, name: "Saturday Extended Line 316", studio: "Club Dance Studio", category: "Mini", type: "Jazz Extended Line", day: "saturday", time: "2:25 PM" },
  { number: 317, name: "Saturday Extended Line 317", studio: "JMDANCE Company", category: "Mini", type: "Contemporary Extended Line", day: "saturday", time: "2:30 PM" },
  { number: 318, name: "Saturday Production 318", studio: "Pure Movement Dance", category: "Mini", type: "Musical Theatre Production", day: "saturday", time: "2:37 PM" },
  { number: 319, name: "Saturday Production 319", studio: "The Pointe Performing Arts Center", category: "Mini", type: "Contemporary Production", day: "saturday", time: "2:44 PM" },
  { number: 320, name: "Saturday Group 320", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Group", day: "saturday", time: "2:48 PM" },
  { number: 321, name: "Saturday Group 321", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Group", day: "saturday", time: "2:52 PM" },
  { number: 322, name: "Saturday Extended Line 322", studio: "Central Oklahoma Dance Center", category: "Junior", type: "Lyrical Extended Line", day: "saturday", time: "2:57 PM" },
  { number: 323, name: "Saturday Production 323", studio: "Michelle Latimer Dance Academy", category: "Junior", type: "Jazz Production", day: "saturday", time: "3:04 PM" },
  { number: 324, name: "Saturday Production 324", studio: "High Pointe Performing Arts Studio", category: "Junior", type: "Contemporary Production", day: "saturday", time: "3:11 PM" },
  { number: 325, name: "Final Awards", studio: "", category: "", type: "Awards Presentation", day: "saturday", time: "1:33 PM" },
]

// State
let currentDance = 1
let selectedDances = new Set()
let currentFilter = 'all'
let searchQuery = ''

// Load saved state from localStorage
function loadState() {
  const saved = localStorage.getItem('adaDanceTracker')
  if (saved) {
    const data = JSON.parse(saved)
    currentDance = data.currentDance || 1
    selectedDances = new Set(data.selectedDances || [])
  }
}

// Save state to localStorage
function saveState() {
  localStorage.setItem('adaDanceTracker', JSON.stringify({
    currentDance,
    selectedDances: Array.from(selectedDances)
  }))
}

// Get Ada's upcoming dances
function getUpcomingDances() {
  return schedule
    .filter(d => selectedDances.has(d.number) && d.number >= currentDance)
    .sort((a, b) => a.number - b.number)
}

// Get next dance for Ada
function getNextDance() {
  const upcoming = getUpcomingDances()
  return upcoming.length > 0 ? upcoming[0] : null
}

// Calculate dances until next
function getDancesUntilNext() {
  const next = getNextDance()
  if (!next) return null
  return next.number - currentDance
}

// Update the status display
function updateStatus() {
  const statusIcon = document.getElementById('statusIcon')
  const statusMessage = document.getElementById('statusMessage')
  const nextDanceInfo = document.getElementById('nextDanceInfo')
  const statusCard = document.getElementById('statusCard')

  const next = getNextDance()
  const dancesUntil = getDancesUntilNext()

  if (selectedDances.size === 0) {
    statusIcon.textContent = '🎯'
    statusMessage.textContent = "Select Ada's dances below to track them!"
    nextDanceInfo.innerHTML = ''
    statusCard.className = 'status-card'
  } else if (!next) {
    statusIcon.textContent = '🎉'
    statusMessage.textContent = "All done! Ada has finished all her dances!"
    nextDanceInfo.innerHTML = ''
    statusCard.className = 'status-card done'
  } else if (dancesUntil === 0) {
    statusIcon.textContent = '🌟'
    statusMessage.innerHTML = `<strong>IT'S TIME!</strong> Ada is ON NOW!`
    nextDanceInfo.innerHTML = `
      <div class="next-dance-detail">
        <span class="dance-num">#${next.number}</span>
        <span class="dance-name">${next.name}</span>
        <span class="dance-type">${next.type}</span>
      </div>
    `
    statusCard.className = 'status-card on-now'
  } else {
    statusIcon.textContent = dancesUntil <= 3 ? '⚡' : '💃'
    statusMessage.innerHTML = `<strong>${dancesUntil}</strong> dance${dancesUntil === 1 ? '' : 's'} until Ada is on!`
    nextDanceInfo.innerHTML = `
      <div class="next-dance-detail">
        <span class="dance-num">#${next.number}</span>
        <span class="dance-name">${next.name}</span>
        <span class="dance-type">${next.type}</span>
      </div>
    `
    statusCard.className = dancesUntil <= 3 ? 'status-card soon' : 'status-card'
  }

  // Update stats
  const selected = Array.from(selectedDances)
  const completed = selected.filter(n => n < currentDance).length
  const remaining = selected.filter(n => n >= currentDance).length

  document.getElementById('totalSelected').textContent = selected.length
  document.getElementById('remainingDances').textContent = remaining
  document.getElementById('completedDances').textContent = completed
}

// Update upcoming dances list
function updateUpcomingList() {
  const container = document.getElementById('upcomingList')
  const section = document.getElementById('upcomingSection')
  const upcoming = getUpcomingDances()

  if (upcoming.length === 0) {
    section.style.display = 'none'
    return
  }

  section.style.display = 'block'
  container.innerHTML = upcoming.map((dance, index) => {
    const dancesUntil = dance.number - currentDance
    const isNext = index === 0
    const isSoon = dancesUntil <= 3

    return `
      <div class="upcoming-item ${isNext ? 'next' : ''} ${isSoon ? 'soon' : ''}">
        <div class="upcoming-number">#${dance.number}</div>
        <div class="upcoming-info">
          <div class="upcoming-name">${dance.name}</div>
          <div class="upcoming-meta">${dance.type} | ${dance.studio}</div>
        </div>
        <div class="upcoming-countdown">
          ${dancesUntil === 0 ? '<span class="now">NOW!</span>' : `${dancesUntil} away`}
        </div>
      </div>
    `
  }).join('')
}

// Render schedule list
function renderSchedule() {
  const container = document.getElementById('scheduleList')

  let filtered = schedule.filter(dance => {
    // Day filter
    if (currentFilter !== 'all' && dance.day !== currentFilter) return false

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        dance.name.toLowerCase().includes(query) ||
        dance.studio.toLowerCase().includes(query) ||
        dance.type.toLowerCase().includes(query) ||
        dance.category.toLowerCase().includes(query) ||
        dance.number.toString().includes(query)
      )
    }

    return true
  })

  container.innerHTML = filtered.map(dance => {
    const isSelected = selectedDances.has(dance.number)
    const isPast = dance.number < currentDance
    const isCurrent = dance.number === currentDance

    return `
      <div class="schedule-item ${isSelected ? 'selected' : ''} ${isPast ? 'past' : ''} ${isCurrent ? 'current' : ''}"
           data-number="${dance.number}">
        <div class="item-number">${dance.number}</div>
        <div class="item-details">
          <div class="item-name">${dance.name}</div>
          <div class="item-meta">
            <span class="item-studio">${dance.studio || 'N/A'}</span>
            <span class="item-type">${dance.type}</span>
          </div>
          <div class="item-time">${dance.time} | ${dance.category || 'All'} | ${dance.day.charAt(0).toUpperCase() + dance.day.slice(1)}</div>
        </div>
        <div class="item-check">${isSelected ? '✓' : ''}</div>
      </div>
    `
  }).join('')

  // Add click handlers
  container.querySelectorAll('.schedule-item').forEach(item => {
    item.addEventListener('click', () => {
      const num = parseInt(item.dataset.number)
      toggleDance(num)
    })
  })
}

// Toggle dance selection
function toggleDance(number) {
  if (selectedDances.has(number)) {
    selectedDances.delete(number)
  } else {
    selectedDances.add(number)
  }
  saveState()
  updateAll()
}

// Update all displays
function updateAll() {
  updateStatus()
  updateUpcomingList()
  renderSchedule()
}

// Initialize
function init() {
  loadState()

  // Current dance input
  const currentInput = document.getElementById('currentDance')
  currentInput.value = currentDance

  currentInput.addEventListener('change', (e) => {
    let value = parseInt(e.target.value)
    if (isNaN(value) || value < 1) value = 1
    if (value > 325) value = 325
    currentDance = value
    currentInput.value = value
    saveState()
    updateAll()
  })

  // Increment/decrement buttons
  document.getElementById('decreaseBtn').addEventListener('click', () => {
    if (currentDance > 1) {
      currentDance--
      currentInput.value = currentDance
      saveState()
      updateAll()
    }
  })

  document.getElementById('increaseBtn').addEventListener('click', () => {
    if (currentDance < 325) {
      currentDance++
      currentInput.value = currentDance
      saveState()
      updateAll()
    }
  })

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      currentFilter = btn.dataset.day
      renderSchedule()
    })
  })

  // Search input
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value
    renderSchedule()
  })

  updateAll()
}

document.addEventListener('DOMContentLoaded', init)

console.log('💃 Ada\'s Dance Tracker loaded! 🩰')
