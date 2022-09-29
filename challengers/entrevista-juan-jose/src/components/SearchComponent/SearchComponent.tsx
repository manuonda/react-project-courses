import { SentimentSatisfiedAltSharp } from '@material-ui/icons';
import React, {useEffect, useState} from 'react';
export interface SearchComponentInterface {}


const SearchComponent : React.FC<SearchComponentInterface> = () => {

	const [error, setError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");
	const [meals, setMeals] = useState([]);

	const fetchSearchResults = async ( searchText: string) => {
		try {
			setIsLoading(true);
			const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
			const data = await result.json();
			console.log(data.meals);
		    return data;
		} catch (error) {
			setError(true);
		} finally{
			setIsLoading(false);
		}
	 }

	 const handleSearch = async () => {
		const resultado = await fetchSearchResults(searchText);
		setMeals(resultado);
	 }

	useEffect(() => {
      
		const getRecipeResults = async () => {
           const results = await fetchSearchResults('chicken');
		   const data = results?.meals != null ? results.meals : [];
		   console.log('resultado : ',results.meals)
		   setMeals(data);
		}
		getRecipeResults();
      
	}, [])

	if( isLoading) {
		return <div>Loading...</div>
	}
	
	return (
		<div>
			<label>
				Search Text
				<input type="text" name="searchText" 
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)} />
			</label>
			<button type='button' onClick={handleSearch}> Search </button>
			{ isLoading? <div>Loading...</div> : ""}
              
			<hr></hr>
			<div>
			  {meals && meals?.map((meal, index) => (
				<div key={index}>
				 <div>
					<h1>{meal.strMeal}</h1>
					<img src={meal.strMealThumb} width={100} height={200}></img>
				 </div>
				</div>
			  ))}	
			</div>  
		</div>

	);
};

export default SearchComponent;
