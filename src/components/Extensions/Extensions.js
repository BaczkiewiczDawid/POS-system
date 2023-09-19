import React, { useEffect, useRef, useState } from "react";
import { Overlay, Modal, ListWrapper, ListItem } from "./Extensions.style";
import categoryList from "../../data/categoryList.json";
import ExtensionsItem from "../ExtensionsItem/ExtensionsItem";

const Extensions = ({ setIsExtensionsListOpen }) => {
  const extensionsList = categoryList.extensions;

  const ModalRef = useRef(null)

  const CloseModal = (ref) => {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log('Clicked outside');
          setIsExtensionsListOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  CloseModal(ModalRef)

  return (
    <>
      <Overlay />
      <Modal ref={ModalRef}>
        <h2>Select extensions</h2>
        <ListWrapper>
          {extensionsList.map((item) => {
            return (
              // <ListItem key={item.name} isSelected onClick={() => addExtension(item)}>
              //   <h3>{item.name}</h3>
              //   <p>{item.price}</p>
              // </ListItem>
              <ExtensionsItem item={item} />
            )
          })}
        </ListWrapper>
      </Modal>
    </>
  );
};

export default Extensions;
