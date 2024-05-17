import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Profile = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View className="flex-1 bg-white pt-12">
      <View style={styles.shadow}>
        <Text className="text-xl font-bold mb-2 px-5 pt-2">Profile</Text>
      </View>
      <ScrollView className="flex bg-slate-100">
        <View
          className="px-5 mt-2 py-4 items-center bg-white"
          style={styles.shadow}
        >
          <Image
            source={require("./../../assets/profile.png")}
            className="w-36 h-36 rounded-full mb-2"
          />
          <Text className="text-2xl font-bold">Margaretha Olivia Haryono</Text>
          <Text className="text-lg">Informatics Student at ITB</Text>

          <View className="flex flex-row">
            <TouchableOpacity
              onPress={() =>
                handleLinkPress("https://linkedin.com/in/margarethaolivia")
              }
              className="mr-3"
            >
              <Text className="text-base text-blue-600 underline">
                Linkedin
              </Text>
            </TouchableOpacity>
            <Text className="text-base mr-3">|</Text>
            <TouchableOpacity
              onPress={() =>
                handleLinkPress("https://github.com/margarethaolivia")
              }
            >
              <Text className="text-base text-blue-600 underline">Github</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-2 p-4 bg-white">
          <Text className="text-xl font-bold mb-2">About</Text>
          <Text className="text-base leading-5">
            Creative IT student, passionate for tech-driven innovation, holding
            reputable accolades from multiple hackathon competitions. Adept at
            solving complex user problems by delivering innovative solutions.
          </Text>
        </View>

        <View className="mt-2 p-4 bg-white">
          <Text className="text-xl font-bold mb-2">Experience</Text>

          <View className="my-1">
            <View className="pl-2 border-l-2 border-gray-300 mb-2 pb-2">
              <Text className="text-base font-bold  mb-1">
                Project Manager - Inkubator IT
              </Text>
              <Text className="text-sm mb-2 text-gray-500">
                Jan 2023 - Aug 2023
              </Text>
              <View>
                <Text>
                  • Managed software projects with a revenue of more than IDR
                  10M
                </Text>
                <Text>
                  • Developed comprehensive project plans, including scope,
                  resource, and budget
                </Text>
                <Text>
                  • Implemented agile methodologies with effective communication
                  among team members and clients to ensure project alignment and
                  stakeholder satisfaction
                </Text>
              </View>
            </View>
          </View>

          <View className="my-1">
            <View className="pl-2 border-l-2 border-gray-300 mb-2 pb-2">
              <Text className="text-base font-bold mb-1 leading-5">
                Head of Website Development Division - {"\n"} Aku Masuk ITB 2023
              </Text>
              <Text className="text-sm mb-2 text-gray-500">
                Sep 2022 - Mar 2023
              </Text>
              <View>
                <Text>
                  • Led a team of 15 members to successfully develop a
                  user-friendly website
                </Text>
                <Text>
                  • Created a website that attracted approximately 2,000
                  visitors for an open-house event
                </Text>
                <Text>
                  • Collaborated with cross-functional teams including
                  developers, designers, and content creators
                </Text>
              </View>
            </View>
          </View>

          <View className="my-1">
            <View className="pl-2 border-l-2 border-gray-300 mb-2 pb-2">
              <Text className="text-base font-bold mb-1 leading-5">
                Computer Science Teaching Assistant - Yayasan Generasi Maju
                Berkarya
              </Text>
              <Text className="text-sm mb-2 text-gray-500">
                Apr 2022 - Jun 2022
              </Text>
              <View>
                <Text>
                  • Structured the CS101 class curriculum in collaboration with
                  the teaching team to ensure comprehensive coverage of
                  fundamental computer science concepts
                </Text>
                <Text>
                  • Empowered a group of 25 high-schoolers during a one-week
                  summer program to explore the STEM field
                </Text>
                <Text>
                  • Mentored students through interactive lessons and hands-on
                  coding exercises
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-2 p-4 bg-white">
          <Text className="text-xl font-bold mb-2">Projects</Text>

          <View className="my-1">
            <View className="pl-2 border-l-2 border-gray-300 mb-2 pb-2">
              <View className="flex flex-row">
                <Text className="text-base font-bold mb-1 leading-5 mr-2">
                  Glutara
                </Text>
                <Text className="text-sm">
                  (Flutter, Firebase, Golang, Tensorflow)
                </Text>
              </View>
              <Text className="text-sm mb-2 text-gray-500">
                Nov 2023 - Present
              </Text>
              <View>
                <Text>
                  • Glutara is an IoT system centered around a non-invasive
                  wearable Continuous Glucose Monitor (CGM)
                </Text>
                <Text>
                  • Implemented design thinking framework to provide the best
                  solution that aligned with user needs
                </Text>
              </View>
            </View>
          </View>

          <View className="my-1">
            <View className="pl-2 border-l-2 border-gray-300 mb-2 pb-2">
              <View className="flex flex-row">
                <Text className="text-base font-bold mb-1 leading-5 mr-2">
                  CoinQuest
                </Text>
                <Text className="text-sm">
                  (MongoDB, Express.js, React.js, Node.js)
                </Text>
              </View>
              <Text className="text-sm mb-2 text-gray-500">
                Aug 2023 - Nov 2023
              </Text>
              <View>
                <Text>
                  • Developed a website to educate children on financial
                  literacy through interactive and playful activities
                </Text>
                <Text>
                  • Utilized the SDLC with scrum/agile methodology to ensure an
                  efficient development process
                </Text>
              </View>
            </View>
          </View>

          <View className="my-1">
            <View className="pl-2 border-l-2 border-gray-300 mb-2 pb-2">
              <View className="flex flex-row">
                <Text className="text-base font-bold mb-1 leading-5 mr-2">
                  Aku Masuk ITB 2023 Website
                </Text>
                <Text className="text-sm">(React.js, Tailwind CSS)</Text>
              </View>
              <Text className="text-sm mb-2 text-gray-500">
                Sep 2022 - Mar 2023
              </Text>
              <View>
                <Text>
                  • Marketed Aku Masuk ITB 2023 through a stunning homepage with
                  eye-catching animation
                </Text>
                <Text>
                  • Designed and implemented a user-friendly interface resulting
                  in increased user engagement
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-2 p-4 bg-white">
          <Text className="text-xl font-bold mb-2">Achievements</Text>

          <View className="my-1">
            <View className="pl-2 border-l-2 border-gray-300 mb-2 pb-2">
              <Text className="text-base font-bold  mb-1">
                [International] Top 100 Global Solution Challenge - Google
                Developer Student Clubs
              </Text>
              <Text className="text-sm mb-2 text-gray-500">Apr 2024</Text>
              <View>
                <Text>
                  • Achieved top 100 among 4000+ participating teams from 110+
                  countries globally
                </Text>
                <Text>
                  • Build a holistic solution of a non-invasive Continuous
                  Glucose Monitoring (CGM) for diabetic people
                </Text>
              </View>
            </View>
          </View>

          <View className="my-1">
            <View className="pl-2 border-l-2 border-gray-300 mb-2 pb-2">
              <Text className="text-base font-bold mb-1 leading-5">
                [National] 1ˢᵗ Winner at SIFEST UI/UX Competition - Sriwijaya
                University
              </Text>
              <Text className="text-sm mb-2 text-gray-500">Nov 2023</Text>
              <View>
                <Text>
                  • Achieved 1ˢᵗ winner among 30 participating teams from 10
                  universities
                </Text>
                <Text>
                  • Created a solution to encourage greater use of public
                  transportation using design thinking method
                </Text>
              </View>
            </View>
          </View>

          <View className="my-1">
            <View className="pl-2 border-l-2 border-gray-300 mb-2 pb-2">
              <Text className="text-base font-bold mb-1 leading-5">
                [National] 2ⁿᵈ Winner at IFEST Website Development Competition -
                Padjadjaran University
              </Text>
              <Text className="text-sm mb-2 text-gray-500">Oct 2023</Text>
              <View>
                <Text>
                  • Achieved 2ⁿᵈ winner among 25 participating teams from 12
                  universities
                </Text>
                <Text>
                  • Implemented SDLC to build a website designed to enhance
                  financial literacy among young children
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-2 p-4 bg-white">
          <Text className="text-xl font-bold mb-2">Skills</Text>
          <View className="flex flex-row justify-between">
            <View>
              <Text className="text-base">JavaScript</Text>
              <Text className="text-base">React Native</Text>
              <Text className="text-base">Flutter</Text>
              <Text className="text-base">React.js</Text>
            </View>
            <View>
              <Text className="text-base">Next.js</Text>
              <Text className="text-base">Express.js</Text>
              <Text className="text-base">PostgreSQL</Text>
              <Text className="text-base">MongoDB</Text>
            </View>
            <View>
              <Text className="text-base">Critical Thinking</Text>
              <Text className="text-base">Communication</Text>
              <Text className="text-base">Teamwork</Text>
              <Text className="text-base"></Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
});

export default Profile;
