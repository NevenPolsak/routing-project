import React from "react";
import home from "../home.jpg";

const Home = () => {
  return (
    <div>
      <h1 className="ui center aligned icon header">Home</h1>
      <div className="ui segment">
        <img className="ui centered medium image" src={home} alt="home"/>
        <br />
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
          alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
        <br />
        <p>
          Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
          Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute
          at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi
          te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
          convenire mnesarchum eu per, quas minimum postulant per id.
        </p>
      </div>
    </div>
  );
};

export default Home;
