import { searchBooks } from "../services/index";
import { action, computed, observable, runInAction } from "mobx";

class BookSearchStore {
  @observable term = "javascript";
  @observable status = "";
  @observable.shallow results = [];

  @observable totalCount = 0;

  @computed
  get isEmpty() {
    return this.results.length === 0;
  }

  constructor() {
    this.search();
  }

  @action.bound
  setTerm(value) {
    this.term = value;
  }

  @action.bound
  async search() {
    try {
      this.status = "pending";
      const result = await searchBooks(this.term);

      runInAction(() => {
        this.totalCount = result.total;
        this.results = result.items;
        this.status = "completed";
      });
    } catch (e) {
      runInAction(() => (this.status = "failed"));
      console.log(e);
    }
  }
}

export const store = new BookSearchStore();
