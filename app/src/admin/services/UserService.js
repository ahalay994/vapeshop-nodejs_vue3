export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })
    return await response.json().catch(e => console.log(e));
}


export async function checkUser(data) {
    const response = await fetch(`/api/users/check/${data}`)
    return await response.json().catch(e => console.log(e));
}
