import React, { useState, useEffect } from "react";
import "./Tree.css";
import Modal from "../Modal/Modal";
import TreePopup from "../TreePopup/TreePopup";
import TreeItem from "../TreeItem/TreeItem";
import Card from "../Card/Card";
import api from "../../utils/api";
import Preloader from "../Preloader/Preloader";

const Tree = ({ checkToken }) => {
  const [modalActive, setModalActive] = useState({
    treePopup: false,
    cardPopup: false,
    preloader: false,
  });
  const [currentTree, setCurrentTree] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [line, setLine] = useState(null);
  const [cardItem, setCardItem] = useState({});

  const nextPage = () => {
    if (page >= 0 && page < pageCount - 1) {
      setPage(page + 1);
    } else {
      setPage(page);
    }
  };

  const prevPage = () => {
    if (page > 0 && page <= pageCount - 1) {
      setPage(page - 1);
    } else {
      setPage(page);
    }
  };

  useEffect(() => {
    handleGetTreeInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [line, page]);

  const handleGetTreeInfo = async () => {
    setModalActive({ ...modalActive, preloader: true });
    await checkToken();
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const tree = await api.getTreeInfo(jwt, line, page, 4);
        setModalActive({ ...modalActive, treePopup: true });
        setCurrentTree(tree.lines);
        setPageCount(tree.pagesCount);
      } catch (err) {
        console.error(err);
        setModalActive({ ...modalActive, preloader: false });
      }
    }
  };

  const handleOpenPopup = (line) => {
    setLine(line);
  };

  const handleClosePopup = () => {
    setModalActive({ ...modalActive, treePopup: false });
    setLine(null);
    setPage(0);
    setPageCount(0);
  };

  const handleCardPopup = (treeItem) => {
    setModalActive({ ...modalActive, cardPopup: true });
    setCardItem(treeItem.teamInfo);
  };

  const handleCloseCardPopup = () => {
    setModalActive({ ...modalActive, cardPopup: false });
  };

  const treeList = currentTree.map((treeItem, index) => (
    <TreeItem
      key={index}
      treeItem={treeItem}
      onClick={() => handleCardPopup(treeItem)}
    />
  ));

  return (
    <>
      <section className="tree">
        <div className="tree__cards">
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 1 /
              <span className="tree__title_category"> ???? ????????????????????</span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => {
                handleOpenPopup(1);
              }}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 2 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(2)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 3 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(3)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 4 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(4)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 5 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(5)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 6 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(6)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 7 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(7)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 8 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(8)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 9 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(9)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 10 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(10)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 11 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(11)}
            >
              ???????????????? ????????????
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              ?????????? 12 /
              <span className="tree__title_category">
                {" "}
                ?????????????????????? ????????????????
              </span>
            </p>
            <p className="tree__subtitle"></p>
            <button
              className="tree__button wallet__button link link_active open"
              onClick={() => handleOpenPopup(12)}
            >
              ???????????????? ????????????
            </button>
          </div>
        </div>
      </section>
      <Modal active={modalActive.treePopup}>
        <TreePopup
          onClose={handleClosePopup}
          line={line}
          page={page}
          prevPage={prevPage}
          nextPage={nextPage}
          handleGetTreeInfo={handleGetTreeInfo}
        >
          {treeList}
        </TreePopup>
      </Modal>
      <Modal active={modalActive.cardPopup} className="card__modal">
        <Card onClose={handleCloseCardPopup} cardItem={cardItem} line={line} />
      </Modal>
      <Modal active={modalActive.preloader}>
        <Preloader />
      </Modal>
    </>
  );
};

export default Tree;
