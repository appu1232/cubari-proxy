import React, { PureComponent } from "react";
import { getAll } from "../utils/history";
import MangaCard from "../components/MangaCard";

export default class History extends PureComponent {
  render() {
    const items = getAll().map((manga) => (
      <MangaCard
        key={manga.identifier}
        mangaUrlizer={(e) => e}
        slug={manga.identifier}
        coverUrl={manga.coverUrl}
        mangaTitle={manga.title}
      />
    ));
    return (
      <div className="columns is-mobile is-multiline">
        <section className="hero column is-full">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">History</h1>
              <h2 className="subtitle">
                Note that this history is different from your remotestorage
                history on cubari.moe.
              </h2>
            </div>
          </div>
        </section>
        <div className="history UI List">
          {items.length ? (
            items
          ) : (
            <section className="hero column is-full">
              <h1 className="title is-4">No items.</h1>
            </section>
          )}
        </div>
      </div>
    );
  }
}
