import { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import api from './src/services/api'
import { globalStyles } from "./src/styles/globalStyles";

export default function App() {
  const [filmes, setFilmes] = useState([])
  const [pesquisa, setPesquisa] = useState('')

  useEffect(() => {
    async function carregarFilmes() {
      if (pesquisa.trim() !== '') {
        try {
          const response = await api.get(pesquisa.replace(' ', '%20'))
          setFilmes(response.data)
        } catch (err) {
          console.error('erro na requisição: ', err)
        }
      } else {
        setFilmes([])
      }
    }
    carregarFilmes()
  }, [pesquisa])

  const handlePesquisa = (texto) => {
    setPesquisa(texto)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={globalStyles.container}>
        <TextInput
          style={globalStyles.input}
          placeholder="digite o nome do filme"
          value={pesquisa}
          onChangeText={handlePesquisa}
        />
        <Text
          style={globalStyles.titulo}
        > Resultado(s) da pesquisa
        </Text>

        <ScrollView>
          {filmes.map((filme) => (
            <View
              key={filme.show.id}
              style={globalStyles.card}
            >{filme.show.image && (
              <Image
                source={{ uri: filme.show.image.medium }}
                style={globalStyles.imagem}
                resizeMode='cover'
              />
            )}

              <View
                style={globalStyles.infoContainer}>
                <Text
                  style={globalStyles.tituloFilme}>
                  {filme.show.name}
                </Text>
                <Text style={globalStyles.url}>
                  {filme.show.url}
                </Text>
              </View>

            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}