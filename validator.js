class Validator {
   static validateUsername(username) {
        if (!username.match(/^[a-zA-z0-9-_]+$/)) {
            return false
        }
        if (username.match(/\d{4}/)) {
            return false
        }
        if (username.match(/^[\d_-]|[\d_-]$/)) {
            return false
        }
        return true
    }
}