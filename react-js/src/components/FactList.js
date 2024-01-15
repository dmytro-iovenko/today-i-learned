function FactList() {
  return (
    <section>
      <ul className="facts-list">
        <li className="fact">
          <p>
            React is being developed by Meta (formerly facebook)
            <a className="source" href="https://opensource.fb.com/" target="_blank">
              (Source)
            </a>
          </p>
          <span className="tag" /*style="background-color: #3b82f6"*/>
            technology
          </span>
          <div className="vote-buttons">
            <button>👍 24</button>
            <button>🤯 9</button>
            <button>⛔️ 4</button>
          </div>
        </li>

        <li className="fact">
          <p>
            Millennial dads spend 3 times as much time with their kids than
            their fathers spent with them. In 1982, 43% of fathers had never
            changed a diaper. Today, that number is down to 3%
            <a
              className="source"
              href="https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids"
              target="_blank"
            >
              (Source)
            </a>
          </p>
          <span className="tag" /*style="background-color: #eab308"*/>
            society
          </span>
          <div className="vote-buttons">
            <button>👍 11</button>
            <button>🤯 2</button>
            <button>⛔️ 0</button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FactList;
