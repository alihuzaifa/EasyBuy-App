import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from './Style';
function FontAwesome({ name }) {
    return (
        <Icon name={name} size={20} style={GlobalStyle.icon} />
    )
}
export { FontAwesome }