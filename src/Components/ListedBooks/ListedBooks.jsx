import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])

    const allBooks = useLoaderData()

    // Ideally we will directly get the read book list form the data base

    useEffect( () => {
        const addToStoreReadList = getStoreReadList()
        const addToStoreReadListInt = addToStoreReadList.map(id => parseInt(id))

        // not the based way...This is wrost way

        console.log(addToStoreReadList,addToStoreReadListInt, allBooks)


        const readBookList = allBooks.filter(book => addToStoreReadListInt.includes(book.bookId))

        setReadList(readBookList)

    }, [])

    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
                   {
                    readList.map(book => <Book key={book.bookId} book={book}></Book>)
                   }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;