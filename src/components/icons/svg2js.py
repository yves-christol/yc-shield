import glob
icons = glob.glob("*.svg")
print('Will merge ', len(icons),' icons.')
output = open('00.txt', 'w')
for icon in icons:
    st = open(icon, 'r').read()
    idx = st.find(' d="') + 4
    st = st[idx : st.find('"', idx)]
    output.write( " ['")
    output.write(icon[0 : icon.find('.')])
    output.write( "', { path: '")
    output.write(st)
    output.write("' } ],\n")
output.close()
