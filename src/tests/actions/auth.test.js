import { login, logout } from '../../actions/auth';

test('should setup login action object correctly', () => {
    const action = {
        type: 'LOG_IN',
        uid: 123
    }
    expect(login(action.uid)).toEqual(action);
})

test('should setup logout action object correctly', () => {
    const action = {
        type: 'LOG_OUT'
    }
    expect(logout()).toEqual(action);
})


