import React, {Component} from 'react'
import {
    Text,
    View,
    TextInput,
    BackAndroid,
    StatusBar,
    Button,
    Image
} from 'react-native'
import {connect} from 'react-redux'

import Toolbar from '../lib/Toolbar'
import TickBtn from '../lib/TickBtn'
import BackBtn from '../lib/BackBtn'
import PlayButton from '../lib/PlayButton'
import AddImageButton from '../lib/AddImageButton'
import {styles} from './styles'
import {getColor} from '../lib/helpers'
import {Typo} from '../lib/Typography'
import {addNote} from '../actions'
let ImagePicker = require('react-native-image-picker');


class NewNote extends Component {
    constructor(props) {
        super(props);

        this._handleBackButton = this._handleBackButton.bind(this)

        this.state = {
            title: '',
            desc: ''
        }
    }

    componentDidMount() {
        BackAndroid.addEventListener('backPressed', this._handleBackButton)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('backPressed', this._handleBackButton)
    }

    _handleBackButton() {
        if (this.state.title == '') {
            this.goBack();
        } else {
            this.addNote();
        }
        this.goBack();
        return true
    }

    _loadImage = () => {
        let options = {
            title: 'Select Option',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};
                this.setState({
                    imageSource: source
                });
            }
        });
    };

    render() {
        return (
            <View style={ styles.addNotesContainer }>
                <StatusBar
                    backgroundColor={getColor('paperTeal700')}
                    barStyle="light-content"
                    animated={true}
                />
                <Toolbar title="Add New Note" color={getColor('paperTeal')}/>

                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.inputTitleStyle}
                        autoFocus={true}
                        placeholder='Note Title...'
                        placeholderTextColor='#aaa'
                        returnKeyType='next'
                        underlineColorAndroid="transparent"
                        selectionColor={getColor('paperTeal')}
                        onChangeText={(text) => this.setState({title: text})}
                        value={this.state.title}
                    />

                    <TextInput
                        style={styles.inputDescriptionStyle}
                        multiline={true}
                        placeholder='Note Description...'
                        placeholderTextColor='#aaa'
                        returnKeyType='done'
                        underlineColorAndroid="transparent"
                        selectionColor={getColor('paperTeal')}
                        onChangeText={(text) => this.setState({desc: text})}
                        value={this.state.desc}
                    />
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={this.state.imageSource}/>
                    </View>
                </View>

                <View style={styles.inputScreenBtnContainer}>
                    <TickBtn onBtnPress={this.addNote.bind(this)}/>
                    <AddImageButton onBtnPress={this._loadImage.bind(this)}/>
                    <PlayButton onBtnPress={() => {}}/>
                    <BackBtn onBtnPress={this.goBack.bind(this)}/>
                </View>

            </View>
        )
    }

    goBack(event) {
        this.props.navigator.pop()
    }

    addNote() {
        this.props.addNote({
            title: this.state.title,
            description: this.state.desc,
            imageSource: this.state.imageSource
        })
        this.goBack()
    }
}

export default connect(null, {addNote})(NewNote)
