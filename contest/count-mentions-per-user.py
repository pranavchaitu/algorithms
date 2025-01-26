def countMentions(numberOfUsers, events):
    mentions = [0] * numberOfUsers
    events.sort(key=lambda x: (int(x[1]), x[0] == "MESSAGE"))
    online = {i for i in range(numberOfUsers)}
    offline = {}
    def checkOfflineEvents(time):
        users = list(offline.items())
        for user,user_time in users:
            if time >= user_time:
                online.add(user)
                del offline[user]
    for i in events:
        checkOfflineEvents(int(i[1]))
        if i[0] == 'MESSAGE':
            if i[2] == 'ALL':
                mentions = list(map(lambda a : a+1,mentions))
            elif i[2] == 'HERE':
                users = list(map(int,online))
                for i in users:
                    mentions[i] += 1
            else:
                users = list(map(lambda a : int(a[2:]),(i[2].split())))
                for i in users:
                    # if i in online:
                    mentions[i] += 1
        else:
            user = int(i[2])
            time = int(i[1])
            offline[user] = time + 60
            if user in online:
                online.remove(user)
        # print(online, mentions)
        # print(offline)
        # print('---NEW---MSG---')
    return mentions


# countMentions(2,[["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"],['MESSAGE','12','id1']])
res = countMentions(3,[["MESSAGE","2","HERE"],["OFFLINE","2","1"],["OFFLINE","1","0"],["MESSAGE","61","HERE"]])
print(res) #-> [1,0,2]