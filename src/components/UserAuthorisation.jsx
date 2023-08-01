import { Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { changeUserSignInStatus } from '../redux/actions/SignInActions';

const UserAuthorisation = ({ navigate }) => {
    const dispatch = useDispatch();
    const { isSignedIn } = useSelector(state => state.signIn);

    const handleSignOutClickedAction = () => {
        dispatch(changeUserSignInStatus(false));
    };

    const handleSignInClickedAction = () => {
        navigate('Sign In');
    };

    let userAuthorisationContent = null;
    if (isSignedIn) {
        userAuthorisationContent = (
            <Button
                title="Sign Out"
                style={styles?.button}
                onPress={handleSignOutClickedAction}
            />
        );
    } else {
        userAuthorisationContent = (
            <Button
                title="Sign In"
                style={styles?.button}
                onPress={handleSignInClickedAction}
            />
        );
    }

    return userAuthorisationContent;
};

const styles = StyleSheet.create({
    button: {
        marginTop: '10px'
    }
});

export default UserAuthorisation;
