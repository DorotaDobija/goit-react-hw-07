import './App.css'
import { ContactList } from './components/ContactList/ContactList'
import { SearchBox } from './components/SearchBox/SearchBox'
import { ContactForm } from './components/ContactForm/ContactForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from './redux/operations'
import { useEffect } from 'react'
import { selectError, selectIsLoading } from './redux/selectors'

export const App = () => {
  const dispatch = useDispatch(); 
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);


useEffect(()=>{
    dispatch(fetchContacts())
}, [dispatch])

  return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    {isLoading && !error && <b>Loading...</b>}
    <ContactList />
  </div>
  )
}


