import React from "react"
import WritingEntry from "../components/writingEntry"

export default function WritingSection({ title, entries: data, level, parent, group_by_key }) {

	// console.log(data)
	function renderHeader() {
		// checking which level of the recursive render we are supposed to perform
		if (level === 1) { return (<h2>{title}</h2>) };
		if (level === 2) { return (<h3>{title}</h3>) };
		if (level >=  3) { return (<h4>{title}</h4>) };

		return (<h2>{title}</h2>)
	}

	// end product is [ category: string, entries: [ 0: { key: value} ], etc.]

	function groupBy(property) {
		const arrayOfGroups = [];
		let groups = [];

		for (let i = 0; i < data.length; i++) {
			const group = data[i][property]	
			// console.log('entry is', data[i])
			// console.log('group is', group)		

			let groupIndex = groups.indexOf(group);
			if (groupIndex === -1) {
				groups.push(group)
				arrayOfGroups.push({category: group, entries: []})
				groupIndex = groups.length - 1;
				}

			arrayOfGroups[groupIndex].entries.push(data[i])
			}

			// console.log('arrayOfGroups', arrayOfGroups)
			// console.log('groups', groups)

			return arrayOfGroups.map((item, index) => {
				return (
					<WritingSection title={item.category} level={level+1} parent={false} entries={item.entries} />
					)
			})
		}

		return (
			<section>
				{ renderHeader() }
				{ parent? (<> { groupBy(group_by_key) }</>) : (
					<ul>
					    { data.map((item, index) => {
					       return (
					       	 <WritingEntry key={`${title}_writing_entry_${index}`} frontmatter={item} />
					        )
					      }
					    )}
					</ul>)}
			</section>
		)
	}
