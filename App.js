//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Picker,FlatList,Data} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput_Book_ID: "",
      TextInput_Book_Name: "",
      TextInput_Book_Subjet: "",
      TextInput_Book_Author: "",
      TextInput_Book_Editorial: "",
      dataSource:[]
    };
  }
 
  InsertBook = () => {
    fetch("http://localhost:80/apiLibrary/InsertBook.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_name: this.state.TextInput_Book_Name,
        book_subjet: this.state.TextInput_Book_Subjet,
        book_author: this.state.TextInput_Book_Author,
        book_editorial: this.state.TextInput_Book_Editorial,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
        this.refreshStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  FindBook = () => {
    fetch("http://localhost:80/apiLibrary/ShowBookId.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_Id: this.state.TextInput_Book_ID,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          TextInput_Book_Name: responseJson[0]["book_name"],
          TextInput_Book_Subjet: responseJson[0]["book_subjet"],
          TextInput_Book_Author: responseJson[0]["book_author"],
          TextInput_Book_Editorial: responseJson[0]["book_editorial"],
        });
      })
      .catch((error) => {
        alert("No se Encuentra el ID del Libro");
        this.setState({
          TextInput_Book_ID: "",
          TextInput_Book_Name: "",
          TextInput_Book_Subjet: "",
          TextInput_Book_Author: "",
          TextInput_Book_Editorial: "",
        });
      });
  };

  UpdateBook = () => {
    fetch("http://localhost:80/apiLibrary/UpdateBook.php", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_Id: this.state.TextInput_Book_ID,
        book_name: this.state.TextInput_Book_Name,
        book_subjet: this.state.TextInput_Book_Subjet,
        book_author: this.state.TextInput_Book_Author,
        book_editorial: this.state.TextInput_Book_Editorial,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert("Libro actualizado correctamente ...");
        this.refreshStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  DeleteBook = () => {
    fetch("http://localhost:80/apiLibrary/DeleteBook.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_Id: this.state.TextInput_Book_ID,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert("Libro eliminado correctamente ...");
        this.refreshStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  CleanBooks = () => {
    this.setState({
      TextInput_Book_ID: "",
      TextInput_Book_Name: "",
      TextInput_Book_Subjet: "",
      TextInput_Book_Author: "",
      TextInput_Book_Editorial: "",
    });
  };
  ShowBooks = () => {
    fetch('http://localhost:80/apiLibrary/ShowAllBooks.php')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource:responseJson
      })
    })
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.Titulo}>Biblioteca Central</Text>
        <Text style={styles.Subtitulo}>Gestión de Libros</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <TextInput
            placeholder="Id Libro"
            onChangeText={(TextInputValue) =>
              this.setState({ TextInput_Book_ID: TextInputValue })
            }
            value={this.state.TextInput_Book_ID}
            style={styles.textinputID}
          />
          <Picker
            selectedValue={this.state.genre}
            style={{ height: 40, width: 200, marginLeft: 10 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ genre: itemValue })
            }
          >
            <Picker.Item
              label="Literatura Universal"
              value="Literatura Universal"
            />
            <Picker.Item
              label="Literatura Latinoamericana"
              value="Literatura Latinoamericana"
            />
            <Picker.Item
              label="Literatura Colombiana"
              value="Literatura Colombiana"
            />
          </Picker>
        </View>
        <TextInput
          placeholder="Nombre Libro"
          onChangeText={(TextInputValue) =>
            this.setState({ TextInput_Book_Name: TextInputValue })
          }
          value={this.state.TextInput_Book_Name}
          style={styles.textinput}
        />
        <TextInput
          placeholder="Género Libro"
          onChangeText={(TextInputValue) =>
            this.setState({ TextInput_Book_Subjet: TextInputValue })
          }
          value={this.state.TextInput_Book_Subjet}
          style={styles.textinput}
        />
        <TextInput
          placeholder="Autor Libro"
          onChangeText={(TextInputValue) =>
            this.setState({ TextInput_Book_Author: TextInputValue })
          }
          value={this.state.TextInput_Book_Author}
          style={styles.textinput}
        />
        <TextInput
          placeholder="Editorial Libro"
          onChangeText={(TextInputValue) =>
            this.setState({ TextInput_Book_Editorial: TextInputValue })
          }
          value={this.state.TextInput_Book_Editorial}
          style={styles.textinput}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.InsertBook}>
            <Text>ADD BOOK</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <TouchableOpacity style={styles.button} onPress={this.FindBook}>
              <Text>FIND BOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.UpdateBook}>
              <Text>UPDATE BOOK</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.buttondelete}
            onPress={this.DeleteBook}
          >
            <Text>DELETE BOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonclean}
            onPress={this.CleanBooks}
          >
            <Text>CLEAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={this.ShowBooks}>
            <Text>SHOW ALL</Text>
          </TouchableOpacity>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  alert(item.book_name + " - " + item.book_author)
                }
                style={styles.TouchableOpacityStyle}
              >
                <Text>
                  {item.book_name} - {item.book_author}
                </Text>
              </TouchableOpacity>
            )}
          />          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: "center",
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },

  Titulo:{
    fontSize:40,
    textAlign:"center",
  },

  Subtitulo:{
    fontSize:25,
    marginBottom:5
  },
  button : {
    backgroundColor: "#5eff33", 
    borderRadius:5,
    margin:3, 
    padding: 5,
    textAlign:"center"
  },
  buttondelete : {
    backgroundColor: "#ff7a33", 
    borderRadius:5,
    margin:3, 
    padding: 5,
    textAlign:"center"
  },
  buttonclean : {
    backgroundColor: "#33ffda", 
    borderRadius:5,
    margin:3, 
    padding: 5,
    textAlign:"center"
  },

  textinput:{
    textAlign: 'center',
    width: '90%',
    marginBottom: 5,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,
  },
  textinputID:{
    textAlign: 'center',
    width: '25%',
    marginBottom: 5,
    marginLeft:15,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,
  },
 

});