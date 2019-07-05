import React, { Component } from 'react';
import './App.css';
import * as configcat from 'configcat-js';
import Demo from './Demo';

class App extends Component {

  constructor(props) {
    super(props)
    this.client = configcat.createClientWithAutoPoll("PKDVCLf-Hq-h-kCzMp-L7Q/HhOWfwVtZ0mb30i9wi17GQ", { pollIntervalSeconds: 2 });
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="heading"><h1>Welcome to ConfigCat Sample app for React.js!</h1></div>
        <div className="logos">
          <img className="cat" width="100" alt="ConfigCat Logo" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDQuNzcgMjEwLjA3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2U1NGM1Yzt9LmNscy0ye2ZpbGw6I2ZmZjt9LmNscy0ze2ZpbGw6IzFhNDM0YTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmNhdDwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjAxLjU3LDEwMFY0MGwtNjAsNjBIOTEuNzJsLTQwLTQwVjE5MGE2MCw2MCwwLDAsMCw2MCw2MGg5MFYxMDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUuNjIgLTQwKSIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMzQuMjIiIHk9IjgwLjQ4IiB3aWR0aD0iMTEzLjc2IiBoZWlnaHQ9IjUxLjcxIiByeD0iMjUuODUiIHJ5PSIyNS44NSIvPjxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeD0iMTE5Ljk1IiBjeT0iMTA2LjMzIiByPSIyMCIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTk3LjUyLDEzMC42M2ExNiwxNiwwLDEsMS0xNiwxNiwxNiwxNiwwLDAsMSwxNi0xNm0wLTRhMjAsMjAsMCwxLDAsMjAsMjAsMjAsMjAsMCwwLDAtMjAtMjBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUuNjIgLTQwKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzNS42OCwxODcuNGEyLDIsMCwwLDAtMi44MywwbC02LjEzLDYuMTMtNi4xMy02LjEzYTIsMiwwLDAsMC0yLjgzLDIuODNsNyw3djEzLjZhMiwyLDAsMCwwLDQsMHYtMTMuNmw3LTdBMiwyLDAsMCwwLDEzNS42OCwxODcuNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNS42MiAtNDApIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDQuNzYsMTk1LjA2SDg1LjI5YTEuNSwxLjUsMCwxLDAsMC0zSDQ0Ljc2YTEuNSwxLjUsMCwxLDAsMCwzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1LjYyIC00MCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik05Mi45NCwxOTkuM0gzNy4xMmExLjUsMS41LDAsMCwwLDAsM0g5Mi45NGExLjUsMS41LDAsMCwwLDAtM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNS42MiAtNDApIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNODUuMjksMjA2LjU0SDQ0Ljc2YTEuNSwxLjUsMCwxLDAsMCwzSDg1LjI5YTEuNSwxLjUsMCwwLDAsMC0zWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1LjYyIC00MCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNjguNSwxOTMuNTdIMjA5YTEuNSwxLjUsMCwxLDAsMC0zSDE2OC41YTEuNSwxLjUsMCwwLDAsMCwzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1LjYyIC00MCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMTYuNjcsMTk3LjhIMTYwLjg1YTEuNSwxLjUsMCwxLDAsMCwzaDU1LjgyYTEuNSwxLjUsMCwxLDAsMC0zWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1LjYyIC00MCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMDksMjA1SDE2OC41YTEuNSwxLjUsMCwwLDAsMCwzSDIwOWExLjUsMS41LDAsMCwwLDAtM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNS42MiAtNDApIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjc1LjM0LDEzOS42MmwwLDBhMjAuMTcsMjAuMTcsMCwxLDAtMzcuNSwxNC44Myw2NS42Nyw2NS42NywwLDAsMS03OS4xNyw4NS4zNkE4Mi4xLDgyLjEsMCwwLDAsMjc1LjM0LDEzOS42MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNS42MiAtNDApIi8+PC9zdmc+" />
          <span role="img" aria-label="heart" className="heart">❤️</span>
          <img width="140" alt="React Logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMl8xXyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgODQxLjkgNTk1LjMiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9IiM2MURBRkIiIGQ9Ik02NjYuMywyOTYuNWMwLTMyLjUtNDAuNy02My4zLTEwMy4xLTgyLjRjMTQuNC02My42LDgtMTE0LjItMjAuMi0xMzAuNGMtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiwwLDguMywwLjksMTEuNCwyLjZjMTMuNiw3LjgsMTkuNSwzNy41LDE0LjksNzUuN2MtMS4xLDkuNC0yLjksMTkuMy01LjEsMjkuNGMtMTkuNi00LjgtNDEtOC41LTYzLjUtMTAuOWMtMTMuNS0xOC41LTI3LjUtMzUuMy00MS42LTUwYzMyLjYtMzAuMyw2My4yLTQ2LjksODQtNDYuOWwwLTIyLjNjMCwwLDAsMCwwLDBjLTI3LjUsMC02My41LDE5LjYtOTkuOSw1My42Yy0zNi40LTMzLjgtNzIuNC01My4yLTk5LjktNTMuMnYyMi4zYzIwLjcsMCw1MS40LDE2LjUsODQsNDYuNmMtMTQsMTQuNy0yOCwzMS40LTQxLjMsNDkuOWMtMjIuNiwyLjQtNDQsNi4xLTYzLjYsMTFjLTIuMy0xMC00LTE5LjctNS4yLTI5Yy00LjctMzguMiwxLjEtNjcuOSwxNC42LTc1LjhjMy0xLjgsNi45LTIuNiwxMS41LTIuNmwwLTIyLjNjMCwwLDAsMCwwLDBjLTguNCwwLTE2LDEuOC0yMi42LDUuNmMtMjguMSwxNi4yLTM0LjQsNjYuNy0xOS45LDEzMC4xYy02Mi4yLDE5LjItMTAyLjcsNDkuOS0xMDIuNyw4Mi4zYzAsMzIuNSw0MC43LDYzLjMsMTAzLjEsODIuNGMtMTQuNCw2My42LTgsMTE0LjIsMjAuMiwxMzAuNGM2LjUsMy44LDE0LjEsNS42LDIyLjUsNS42YzI3LjUsMCw2My41LTE5LjYsOTkuOS01My42YzM2LjQsMzMuOCw3Mi40LDUzLjIsOTkuOSw1My4yYzguNCwwLDE2LTEuOCwyMi42LTUuNmMyOC4xLTE2LjIsMzQuNC02Ni43LDE5LjktMTMwLjFDNjI1LjgsMzU5LjcsNjY2LjMsMzI4LjksNjY2LjMsMjk2LjV6IE01MzYuMSwyMjkuOGMtMy43LDEyLjktOC4zLDI2LjItMTMuNSwzOS41Yy00LjEtOC04LjQtMTYtMTMuMS0yNGMtNC42LTgtOS41LTE1LjgtMTQuNC0yMy40QzUwOS4zLDIyNCw1MjMsMjI2LjYsNTM2LjEsMjI5Ljh6IE00OTAuMywzMzYuM2MtNy44LDEzLjUtMTUuOCwyNi4zLTI0LjEsMzguMmMtMTQuOSwxLjMtMzAsMi00NS4yLDJjLTE1LjEsMC0zMC4yLTAuNy00NS0xLjljLTguMy0xMS45LTE2LjQtMjQuNi0yNC4yLTM4Yy03LjYtMTMuMS0xNC41LTI2LjQtMjAuOC0zOS44YzYuMi0xMy40LDEzLjItMjYuOCwyMC43LTM5LjljNy44LTEzLjUsMTUuOC0yNi4zLDI0LjEtMzguMmMxNC45LTEuMywzMC0yLDQ1LjItMmMxNS4xLDAsMzAuMiwwLjcsNDUsMS45YzguMywxMS45LDE2LjQsMjQuNiwyNC4yLDM4YzcuNiwxMy4xLDE0LjUsMjYuNCwyMC44LDM5LjhDNTA0LjcsMzA5LjgsNDk3LjgsMzIzLjIsNDkwLjMsMzM2LjN6IE01MjIuNiwzMjMuM2M1LjQsMTMuNCwxMCwyNi44LDEzLjgsMzkuOGMtMTMuMSwzLjItMjYuOSw1LjktNDEuMiw4YzQuOS03LjcsOS44LTE1LjYsMTQuNC0yMy43QzUxNC4yLDMzOS40LDUxOC41LDMzMS4zLDUyMi42LDMyMy4zeiBNNDIxLjIsNDMwYy05LjMtOS42LTE4LjYtMjAuMy0yNy44LTMyYzksMC40LDE4LjIsMC43LDI3LjUsMC43YzkuNCwwLDE4LjctMC4yLDI3LjgtMC43QzQzOS43LDQwOS43LDQzMC40LDQyMC40LDQyMS4yLDQzMHogTTM0Ni44LDM3MS4xYy0xNC4yLTIuMS0yNy45LTQuNy00MS03LjljMy43LTEyLjksOC4zLTI2LjIsMTMuNS0zOS41YzQuMSw4LDguNCwxNiwxMy4xLDI0QzMzNy4xLDM1NS43LDM0MS45LDM2My41LDM0Ni44LDM3MS4xeiBNNDIwLjcsMTYzYzkuMyw5LjYsMTguNiwyMC4zLDI3LjgsMzJjLTktMC40LTE4LjItMC43LTI3LjUtMC43Yy05LjQsMC0xOC43LDAuMi0yNy44LDAuN0M0MDIuMiwxODMuMyw0MTEuNSwxNzIuNiw0MjAuNywxNjN6IE0zNDYuNywyMjEuOWMtNC45LDcuNy05LjgsMTUuNi0xNC40LDIzLjdjLTQuNiw4LTguOSwxNi0xMywyNGMtNS40LTEzLjQtMTAtMjYuOC0xMy44LTM5LjhDMzE4LjYsMjI2LjcsMzMyLjQsMjI0LDM0Ni43LDIyMS45eiBNMjU2LjIsMzQ3LjFjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42YzAtMTUuNywyMi45LTM1LjYsNTguMy01MC42YzguNi0zLjcsMTgtNywyNy43LTEwLjFjNS43LDE5LjYsMTMuMiw0MCwyMi41LDYwLjljLTkuMiwyMC44LTE2LjYsNDEuMS0yMi4yLDYwLjZDMjc0LjMsMzU0LjIsMjY0LjksMzUwLjgsMjU2LjIsMzQ3LjF6IE0zMTAsNDkwYy0xMy42LTcuOC0xOS41LTM3LjUtMTQuOS03NS43YzEuMS05LjQsMi45LTE5LjMsNS4xLTI5LjRjMTkuNiw0LjgsNDEsOC41LDYzLjUsMTAuOWMxMy41LDE4LjUsMjcuNSwzNS4zLDQxLjYsNTBjLTMyLjYsMzAuMy02My4yLDQ2LjktODQsNDYuOUMzMTYuOCw0OTIuNiwzMTMsNDkxLjcsMzEwLDQ5MHogTTU0Ny4yLDQxMy44YzQuNywzOC4yLTEuMSw2Ny45LTE0LjYsNzUuOGMtMywxLjgtNi45LDIuNi0xMS41LDIuNmMtMjAuNywwLTUxLjQtMTYuNS04NC00Ni42YzE0LTE0LjcsMjgtMzEuNCw0MS4zLTQ5LjljMjIuNi0yLjQsNDQtNi4xLDYzLjYtMTFDNTQ0LjMsMzk0LjgsNTQ2LjEsNDA0LjUsNTQ3LjIsNDEzLjh6IE01ODUuNywzNDcuMWMtOC42LDMuNy0xOCw3LTI3LjcsMTAuMWMtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjljOS4yLTIwLjgsMTYuNi00MS4xLDIyLjItNjAuNmM5LjksMy4xLDE5LjMsNi41LDI4LjEsMTAuMmMzNS40LDE1LjEsNTguMywzNC45LDU4LjMsNTAuNkM2NDQsMzEyLjIsNjIxLjEsMzMyLjEsNTg1LjcsMzQ3LjF6Ii8+PHBvbHlnb24gZmlsbD0iIzYxREFGQiIgcG9pbnRzPSIzMjAuOCw3OC40IDMyMC44LDc4LjQgMzIwLjgsNzguNCAiLz48Y2lyY2xlIGZpbGw9IiM2MURBRkIiIGN4PSI0MjAuOSIgY3k9IjI5Ni41IiByPSI0NS43Ii8+PHBvbHlnb24gZmlsbD0iIzYxREFGQiIgcG9pbnRzPSI1MjAuNSw3OC4xIDUyMC41LDc4LjEgNTIwLjUsNzguMSAiLz48L2c+PC9zdmc+" />
        </div>
        <Demo client={this.client}></Demo>
      </div>
    );
  }
}

export default App;
