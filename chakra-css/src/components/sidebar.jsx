import React,{useState} from 'react'





import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    
  } 
   from '@chakra-ui/react'


  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Logo</DrawerHeader>
  
            <DrawerBody>
      <h1>Home</h1>
      <h1>Trending</h1>
      <h1>Favourite</h1>
      <h1>Setting</h1>
      <h1>About us</h1>

            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export {DrawerExample}