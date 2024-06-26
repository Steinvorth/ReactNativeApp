import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full Time", "Part Time", "Remote", "Internship", "Freelance"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full Time");

  return (
    <View>
      <View style = {styles.container} >

        <Text style= {styles.userName}>Hello Emi</Text>
        <Text style= {styles.welcomeMessage}>Find your perfect job</Text>

      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}} //this is a placeholder for the "Callback" function that will handle the text input
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList

          data={jobTypes}

          renderItem={({ item }) => (

            <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => {setActiveJobType(item); router.push(`/search/${item}`)}}>

              <Text style={styles.tabBtnText}>{item}</Text>

            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome