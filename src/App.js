import { useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'
import { useEffect, Suspense } from 'react'
import { createResource as fetchData } from './helper'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)
	const API_URL = 'https://itunes.apple.com/search?term='
	
	//const handleSearch = (e, term) => {
    //e.preventDefault()
    //setData(fetchData(term, 'main'))
  //}
    
  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      console.log(fetchData(searchTerm))
      setData(fetchData(searchTerm))
  }
  }, [searchTerm])

		// Fetch Data
		//const fetchData = async () => {
			//document.title = `${term} Music`
			//const response = await fetch(API_URL + term)
			//const resData = await response.json()
			//if (resData.results.length > 0) {
				// Set State and Context value
			//	return setData(resData.results)
			//} else {
			//	return setMessage('Not Found')
			//}
		//}
    
		//fetchData()
	//}

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }


  const renderGallery = () => {
   if(data) {
     return (
     <Suspense fallback={<h1>Loading...</h1>}>
        <Gallery data={data}/>
       </Suspense>
     )
   }
  }


	//return (
	//	<div>
   //   {message}
	//		<SearchContext.Provider value={{
	//			term: searchInput,
	//			handleSearch: handleSearch
	//		}}>
		//		<SearchBar />
		//	</SearchContext.Provider>  
		//	<DataContext.Provider value={data}>
   //   {renderGallery()}
	//		</DataContext.Provider>
      
	//	</div>
  	//);
    return (
      <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        {renderGallery()}
      </div>
    );

}

export default App;

