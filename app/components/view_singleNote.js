import React, {Component} from 'react'
import {
    Text,
    View,
    TextInput,
    BackAndroid,
    StatusBar,
    Image
} from 'react-native'
import {connect} from 'react-redux'

import Toolbar from '../lib/Toolbar'
import TickBtn from '../lib/TickBtn'
import BackBtn from '../lib/BackBtn'
import Player from '../lib/CustomPlayer'
import {styles} from './styles'
import {getColor} from '../lib/helpers'
import {Typo} from '../lib/Typography'
import {updateNote} from '../actions'
import * as api from '../lib/api'
import AddImageButton from '../lib/AddImageButton'
let ImagePicker = require('react-native-image-picker');

class SingleNote extends Component {
    constructor(props) {
        super(props)

        this._handleBackButton = this._handleBackButton.bind(this)

        this.state = {
            changed: false,
            id: this.props.noteId,
            title: this.props.title,
            desc: this.props.description,
            imageSource: this.props.imageSource,
        }
    }

    componentDidMount() {
        BackAndroid.addEventListener('backPressedSingleNote', this._handleBackButton)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('backPressedSingleNote', this._handleBackButton)
    }

    _handleBackButton() {
        if (this.state.changed && this.state.title != '') {
            this.updateNote()
        } else {
            this.goBack()
        }
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
                    imageSource: source,
                    changed: true,
                });
            }
        });
    };

    render() {
        return (
            <View style={ styles.addNotesContainer }>
                <StatusBar
                    backgroundColor={getColor('#19a5ff')}
                    barStyle="light-content"
                    animated={true}
                />
                <Toolbar title="Edit Note" color={getColor('#15a0fe')}/>

                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.inputTitleStyle}
                        placeholder='Note Title...'
                        placeholderTextColor='#aaa'
                        returnKeyType='next'
                        underlineColorAndroid="transparent"
                        selectionColor={getColor('paperTeal')}
                        onChangeText={(text) => this.setState({title: text, changed: true})}
                        value={this.state.title}
                    />

                    <TextInput
                        style={styles.inputDescriptionStyle}
                        multiline={true}
                        placeholder='Note content...'
                        placeholderTextColor='#aaa'
                        returnKeyType='done'
                        underlineColorAndroid="transparent"
                        selectionColor={getColor('paperTeal')}
                        onChangeText={(text) => this.setState({desc: text, changed: true})}
                        value={this.state.desc}
                    />
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={this.state.imageSource}/>
                    </View>
                </View>

                <View style={styles.inputScreenBtnContainer}>
                    <TickBtn onBtnPress={this.updateNote.bind(this)}/>
                    <AddImageButton onBtnPress={this._loadImage}/>
                    <Player url={api.getSoundUrl(this.state.desc)}/>
                    <BackBtn onBtnPress={this.goBack.bind(this)}/>
                </View>

            </View>
        )
    }

    goBack(event) {
        this.props.navigator.pop()
    }

    updateNote() {
        if (this.state.changed) {
            this.props.updateNote({
                id: this.state.id,
                title: this.state.title,
                description: this.state.desc,
                imageSource: this.state.imageSource,
            })
        }

        this.goBack()
    }
}

export default connect(null, {updateNote})(SingleNote)
