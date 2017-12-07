import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOG_IN',
        uid: 123
    }
    const stateAfter = authReducer({}, action);
    expect(action.uid).toBe(stateAfter.uid);
})

test('should clear uid for logout', () => {
    const action = {
        type: 'LOG_OUT'        
    }
    const stateAfter = authReducer({uid: 123}, action);
    expect(stateAfter).toEqual({});
})