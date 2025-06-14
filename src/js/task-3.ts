interface Profile {
  username: string
  playTime: number

  changeUserName: (newName: string) => void
  updatePlayTime: (hours: number) => void
  getInfo: () => string
}

const profile: Profile = {
  username: 'Jacob',
  playTime: 300,
  changeUserName(newName) {
    this.username = newName
  },
  updatePlayTime(hours) {
    this.playTime += hours
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`
  },
}

export default profile
