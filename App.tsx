import React, { useState } from 'react';

import { View, Image, Text, TextInput, Button, Alert } from 'react-native';

const App = () => {

const [inputText, setInputText] = useState('');

const [validationResult, setValidationResult] = useState('');

const handleValidation = () => {

const reversedText = inputText.split('').reverse().join('');

if (inputText === reversedText) {

setValidationResult('Teks tersebut adalah palindrom!');

} else {

setValidationResult('Teks tersebut bukan palindrom.');

}

};

return (

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<Image

source={{

uri:'https://www.wallpaperflare.com/static/593/388/878/anime-uchiha-itachi-sharingan-naruto-shippuuden-wallpaper.jpg'

}}

style={{width:200, height:200}}

/>
<Text>Masukkan kata atau kalimat:</Text>

<TextInput

style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10 }}

onChangeText={text => setInputText(text)}

value={inputText}

/>

<Button title="Validasi" onPress={handleValidation} />

<Text>{validationResult}</Text>

</View>

);

};

export default App;

