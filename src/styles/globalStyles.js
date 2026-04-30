import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    marginTop: 60,
    borderWidth: 1,
    borderColor: 'gray',
  },
  titulo: {
    textAlign: 'center',
    padding: 20,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  lista: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: 350,
    height: 350,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagem: {
    width: '100%',
    height: '60%',
  },

  infoContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },

  tituloFilme: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  url: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
})